<div align="center"><h1>Turning Spigot into Forge</h1></div>
A concept, that is seemingly not too far from reality.

## Abstract
Plugin development is modding, though not really considered modding by a lot of Minecraft Forge developers. That is fine.
I'm very well aware that Spigot development as well as plugin development is probably a joke, and it's probably not
impressive unless you're modifying the server(.jar). The deeper you get into plugin development, the more you learn from it -- including
being able to do more than you would normally be able to with the Spigot API, using NMS (net.minecraft.server).

Ideologically, ***most people*** want to work through an API anyways. When you want to access NMS in its true, "raw" self,
you're probably not using an API.

When I had to make **interesting** changes to the game through plugins through NMS, I noticed a code structure very similar to one that is seen in Forge:
the Minecraft code structure. Under Forge documentation, NMS itself does not have much. That's not the case in the actual archive.
Noteably, the Minecraft `server.jar` gives us access to a lot of things, from an organized, more server-sided way.

If you've coded through Forge, you probably know that `net.minecraft.*` is a shitshow. We don't like to touch it.
We also know that we can wrap specific aspects of Minecraft, to mod things in our own way.

NMS gives us a lot of client-sided aspects that we can manipulate, including, most notably: `IRegistry<T>`.

## Concept
With full access to `IRegistry.class`, we can interact with Minecraft's internal registries. Last I remember, it's still something that is considered **deprecated**
to do in Forge, but this isn't Forge -- more of Forge's distant cousin.

When we register objects to Forge registries (most likely a DeferredRegister), we know that everything that we are registering will be for our MODID.
Internally, it seems that items and their mod id's are registered via MinecraftKeys. Eventually, registration comes down to this invocation:

```java
IRegistry.a(registry, gameKey, type);
```

This registration method is accessible, but was a little bit interesting to feat due to the signature:
```java
// IRegistry.class
public static <V, T extends V> T a(IRegistry<V> registry, MinecraftKey gameKey, T type);
```

Here, we know that if we want to register a TileEntity and retrieve a TileEntityType, we have to make a call similar to this:

```java
public static <T extends TileEntity> TileEntityTypes<T> registerTileEntityType(TileEntityTypes.a<T> type, String typeKey) {
     MinecraftKey key = new MinecraftKey("modid", typeKey);
     return IRegistry.a(
             // Avoid registering under the Minecraft modId
             // SystemUtils is a NMS utility class
            IRegistry.BLOCK_ENTITY_TYPE, key, type.a(SystemUtils.a(DataConverterTypes.BLOCK_ENTITY, typeKey))
     );
 }
```

Similarly, to get the TileEntityTypes.a<T> instance, we have to make a call similar to this:

```java
// returns TileEntityTypes.a<CustomTileEntity>
TileEntityTypes.a.a(CustomTileEntity::new, new Block[0])
```

With this knowledge, we are able to register a TileEntityTypes into the minecraft `IRegistry<TileEntityTypes<?>>` under our modid.
Specific to registering containers, we cannot invoke the registry method correctly without a Containers<T> instance. That's something that is not accessible to us,
and requires invoking on a function interface. We can easily do this through reflection, as well as using a Proxy class to do the actual invocation.

Ideally, we might be able to register everything we want. We have access to majority of the MinecraftRegistries, so assuming we can wrap it, we'd be in the clear. This
gives us a lot more flexibility with custom objects.

Essentially, we'd be able to mod Items, Entities, GUIs, and much more. The only restraint would be textures, but can take a guess that could possibly be worked around.
If that was worked around, however, that would most likely change a lot of base functionalities of server/plugin development and gear it towards something more exciting.

## Final Notes
We have a lot of "modded functionalities" in CraftBukkit/NMS that we would have to get access to. That would not be difficult, and would allow a lot more flexibility of internal changes we could make.
This gets [Plugin Developers] the closest we can to Forge modding, all without forcing a mod loader on the client. Perhaps, we could change base functionalities in ways never seen.

This is all very hypothetical, and to be able to do so without depending on a server jar, there would be heavy interfacing, which is too much work. :P
I hope to delve more into abusing all of our capabilities on a more open-source compatible way, as well as come up with simple solutions to make big changes to the accessibilities we already have.

## Some Forge documentation & resources
* Documentation: [smedix's docs](https://skmedix.github.io/ForgeJavaDocs/javadoc/forge/1.9.4-12.17.0.2051)
* Documentation (1.16.5): [nekoyue's docs](https://nekoyue.github.io/ForgeJavaDocs-NG/javadoc/1.16.5/)
* 1.16 Mappings: [the 1.16 mapping project](https://docs.google.com/spreadsheets/d/14knNUYjYkKkGpW9VTyjtlhaCTUsPWRJ91GLOFX2d23Q/)
* Code Style and Data (Mojang): [data fixer upper](https://github.com/Mojang/DataFixerUpper)
