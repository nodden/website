<template>
  <div>
    <nuxt-content :document="article"/>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('blog', params.slug).fetch();
    return { article };
  }
}
</script>
<style lang="css">
@import "~static/markdown.css";
</style>
