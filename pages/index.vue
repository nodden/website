<template>
  <div class="columns m-5 is-multiline is-mobile">
    <nav-bar :about="true" :blog="true"></nav-bar>
    <!-- todo -->

    <div style="padding-top: 100px; width: 100%;">
      <div class="m-5 columns is-mobile is-multiline is-centered">
        <figure class="m-3 image center">
          <img class="is-300by300-exact scale-1-2" src="/circlenodden.png">
        </figure>

        <div class="column center is-narrow m-5 columns is-multiline is-mobile">
          <div class="column center is-full columns is-multiline is-mobile is-centered m-1">
            <div class="column center main is-full">nodden</div>
            <div class="column center">
              <a href="https://github.com/nodden" target="_blank">
                <font-awesome-icon style="font-size: 60px;" class="six-ease about-icon" :icon="['fab', 'github']"></font-awesome-icon>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  head: {
    meta: [
      {
        property: "description",
        content: 'Software engineers that like purple and cats. This side is under construction.'
      },
      {
        property: "og:description",
        content: 'Software engineers that like purple and cats. This side is under construction.'
      },
    ]
  }
});
</script>
