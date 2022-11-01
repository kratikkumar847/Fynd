import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
import { auth } from '../firebase'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user : null
  },
  getters: {
  },
  mutations: {
    SET_USER (state, user){
      state.user = user
    },

    CLEAR_USER (state) {
      state.user = null
    }
  },
  actions: {
    async login ({ commit } , details){
      //
      const { email, password } = details

      try {
        await signInWithEmailAndPassword(auth, email, password)
      }
      catch(error){
        switch(error.code){
          case 'auth/user-not-found':
            alert("user not found")
            break
          case 'auth/wrong-password':
            alert("Wrong Password")
            break;
          default:
            alert("Something went wrong")
        }

      }
        commit('SET_USER', auth.currentUser)
        router.push('/')
    },

    async register ({commit} , details){
      //
      const { email, password } = details

      try {
        await createUserWithEmailAndPassword(auth, email, password)
      }
      catch(error){
        switch(error.code){
          case 'auth/email-already-in-use':
            alert("Email Already in Use")
            break
          case 'auth/invalid-email':
            alert("Invalid Email")
            break
          case 'auth/operation-not-allowed':
            alert("Operation Not Allowed")
            break
          case 'auth/weak-password':
            alert("Weak Password")
            break
          default:
            alert("Something went wrong")
        }

      }
        commit('SET_USER', auth.currentUser)
        router.push('/')
    },

    async logout ({commit}){
      //
      await signOut(auth)
      commit('CLEAR_USER')
      router.push('/Faculty')
    }
  },
  modules: {
  }
})
