<template>
  <div class="m-5">
    <!-- nav -->
    <nav class="column navbar title-box columns is-mobile is-fixed-top" style="padding: 20px;">
      <a class="column item ml-5 mt-2 is-narrow nav-link has-text-weight-bold white-text"
         href="/" target="_blank">
        Home
      </a>
    </nav>

    <!-- about us -->

    <div class="column m-5 columns is-mobile is-multiline is-centered" style="padding-top: 100px;">
      <div class="column is-full m-3 columns is-mobile is-left">
        <figure class="column is-narrow m-3 image">
          <img class="is-100by100-exact scale-1-2 round-300 mt-5" src="/26123873">
        </figure>
        <div class="column is-narrow columns is-multiline m-3 is-mobile">
          <p class="is-full column about-name">Nick</p>
          <p class="is-full column about-desc">lorem impsum or whatever jkhajkshdshdkasd jshjkdahjksdjkh</p>
          <div class="column is-full">
            <a href="mailto:nick@nodden.org" target="_blank">
              <font-awesome-icon class="about-icon six-ease mr-2" :icon="['fa', 'envelope']"></font-awesome-icon>
            </a>
            <a href="https://github.com/Copystrike" target="_blank">
              <font-awesome-icon class="about-icon six-ease mr-2" :icon="['fab', 'github']"></font-awesome-icon>
            </a>
            <a href="https://copystrike.dev" target="_blank">
              <font-awesome-icon class="about-icon six-ease" :icon="['fas', 'code']"></font-awesome-icon>
            </a>
          </div>
        </div>
      </div>
      <div class="column is-full m-3 columns is-mobile is-left">
        <figure class="column is-narrow m-3 image">
          <img class="is-100by100-exact mt-5 scale-1-2 round-300" src="/46942366">
        </figure>
        <div class="column is-narrow columns is-multiline m-3 is-mobile">
          <p class="is-full column about-name">Bella</p>
          <p class="is-full column about-desc">lorem impsum or whatever jkhajkshdshdkasd jshjkdahjksdjkh</p>
          <div class="column is-full">
            <a href="mailto:bella@nodden.org" target="_blank">
              <font-awesome-icon class="about-icon six-ease mr-2" :icon="['fa', 'envelope']"></font-awesome-icon>
            </a>
            <a href="https://github.com/bfu4" target="_blank">
              <font-awesome-icon class="about-icon six-ease mr-2" :icon="['fab', 'github']"></font-awesome-icon>
            </a>
            <a href="https://sleeepy.ninja" target="_blank">
              <font-awesome-icon class="about-icon six-ease" :icon="['fas', 'code']"></font-awesome-icon>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  head: {
    meta: [
      {
        property: "og:description",
        content: 'About nodden.'
      },
    ]
  }
})
</script>
