import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
 state : {
  name : 'code imporove',
  mainTitle : '****** No Title ******'
 },
 mutations : {
  SetNewTitle(state , payload){
    state.mainTitle = `KRATIK KUMAR + ${payload.title}`
  }
 },
 actions : {
      newTitle(context, payload){
        context.commit('SetNewTitle' , payload)
      }
 }
})
