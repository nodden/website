const fontawesome = require('@fortawesome/fontawesome');
const brands = require('@fortawesome/free-brands-svg-icons');
const solid = require('@fortawesome/free-solid-svg-icons');

const FontAwesomeIcon = require('@fortawesome/vue-fontawesome').FontAwesomeIcon;

import Vue from 'vue';

fontawesome.library.add(
  brands.faGithub,
  solid.faEnvelope
)

Vue.component('font-awesome-icon', FontAwesomeIcon);
