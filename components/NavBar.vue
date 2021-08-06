<template>
  <nav class="column navbar title-box columns is-mobile is-fixed-top" style="padding: 20px;">
    <a v-if="home === true" class="column item ml-5 mt-2 is-narrow nav-link has-text-weight-bold white-text"
       href="/" target="_self">
      Home
    </a>
    <a v-if="about === true" class="column item ml-5 mt-2 is-narrow nav-link has-text-weight-bold white-text"
       href="/about" target="_self">
      About
    </a>
    <a v-if="blog === true" class="column item ml-5 mt-2 is-narrow nav-link has-text-weight-bold white-text"
       href="/blog" target="_self">
      Blog
    </a>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    about: Boolean,
    home: Boolean,
    blog: Boolean
  }
}
</script>

<style scoped>

</style>
