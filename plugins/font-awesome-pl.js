import {
  faGithub
} from "@fortawesome/free-brands-svg-icons";

import {
  faEnvelope,
  faCode
} from "@fortawesome/free-solid-svg-icons";

import { library } from "@fortawesome/fontawesome";
import Vue from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';


library.add(
  faGithub,
  faEnvelope,
  faCode
)

Vue.component('font-awesome-icon', FontAwesomeIcon);
