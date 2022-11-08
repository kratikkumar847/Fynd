import Vue from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.vue'
import store from './store'
import router from './router';
import VueRouter from 'vue-router'
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import  firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtbReXmQY5I5qmOIaf8GCAU0IjjKHmWaI",
  authDomain: "vue-fire-auth-da566.firebaseapp.com",
  projectId: "vue-fire-auth-da566",
  storageBucket: "vue-fire-auth-da566.appspot.com",
  messagingSenderId: "41031556823",
  appId: "1:41031556823:web:ed42b7725d83f693e61a92"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);



Vue.use(VueRouter);

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
