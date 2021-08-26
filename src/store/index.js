import Vue from 'vue'
import Vuex from 'vuex'
import blogdata from './blogdata.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user:[],
    cookey:null
  },
  
  mutations: {
    setuser(state, ud){
      state.user=ud;
    }
  },

  actions: {
    loaduser(context){
      fetch('/data/userdata.json')
      .then(data => data.json())
      .then(data =>{
        context.commit('setuser',data)
      });
    }
  },    
  modules: {
    blogdata
  }
})
