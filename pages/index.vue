<template>
  <div class="columns m-5 is-multiline is-mobile">
    <nav class="column navbar title-box columns is-mobile is-fixed-top" style="padding: 20px;">
      <a class="column item ml-5 mt-2 is-narrow nav-link has-text-weight-bold white-text"
         href="/about" target="_blank">
        About
      </a>
    </nav>
    <!-- todo -->

    <div style="padding-top: 100px; width: 100%;">
      <div class="m-5 columns is-mobile is-multiline is-centered">
        <figure class="column is-narrow m-3 image">
          <img class="is-150by150-exact scale-1-2" src="/circlenodden.png">
        </figure>
        <div class="column center m-5">
          <div class="m-5">
            <p class="m-5 is-36">
              nodden
            </p>
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
        property: "og:description",
        content: 'Software engineers that like purple and cats. This side is under construction.'
      },
    ]
  }
})
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand',
  'Source Sans Pro',
  -apple-system,
  BlinkMacSystemFont,
  'Segoe UI',
  Roboto,
  'Helvetica Neue',
  Arial,
  sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
