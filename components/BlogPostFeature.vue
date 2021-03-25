<template>
  <div class="columns m-3 is-mobile is-multiline blog-post-ann">
    <a :href="hrefRoot" class="column is-full m-2">
      <div class="blogTitle six-ease">
        <font-awesome-icon :icon="['fa', 'book']"></font-awesome-icon>
        {{ title }}
      </div>
      <div class="blogAuthor"> by {{ author }}</div>
    </a>
    <p class="column is-full m-1">
      {{ description }}
    </p>
  </div>
</template>

<script>
export default {
  name: "BlogPostFeature",
  props: {
    title: String,
    author: String,
    description: String,
    hrefRoot: String
  }
}
</script>

<style scoped>

  .blogTitle {
    font-size: 1.6em;
    color: #645e83;
  }

  .blogTitle:hover {
    color: #676186;
    transform: scale(1.2) translate(35px) translateY(-6px);
    border-bottom: 4px solid #aea6d9;
  }

  .blogAuthor {
    color: #1f1f1f;
  }
</style>
