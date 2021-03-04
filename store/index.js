import Vuex from 'vuex'
import Vue from 'vue';

import actions from './actions'
import mutations from './mutations';
import getters from "./getters";

Vue.use(Vuex);

const createStore = () => {
  return new Vuex.Store({
    state: {
      countriesList: [],
      oneCountry: null,
      topRecovered: null
    },
    mutations,
    actions,
    getters
  })
}

export default createStore;
