<template>
  <div class="m-5 columns is-mobile is-multiline">
    <nav-bar :home="true" :about="true"></nav-bar>
    <div class="column is-centered columns m-5 is-mobile is-multiline" style="padding-top: 100px; width: 100%;">
      <div class="column is-centered center is-full title mb-5">
        Our Blog
      </div>
      <div class="column is-full m-3">
        <blog-post-feature
          class="column is-full"
          title="Our New Blog"
          author="Bella Fusari"
          href-root="/blog/welcome"
          description="Welcome to our blog!" />

        <!-- u279c "➜" -->
        <blog-post-feature
          class="column is-full"
          :title="'Spigot \u279C Forge'"
          author="Bella Fusari"
          href-root="/blog/spigot-to-forge"
          description="Spigot/Bukkit is modding, but only for those who know that it's modding"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "blog"
}
</script>

<style scoped>

</style>
