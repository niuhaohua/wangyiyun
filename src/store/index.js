import Vue from 'vue'
import Vuex from 'vuex'
import loading from './modules/loading'
import songs from './modules/songs'

Vue.use(Vuex)


const store = new Vuex.Store({
  modules: {
    loading,
    songs
  }
})

export default store