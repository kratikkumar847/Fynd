import Vue from 'vue'
import App from './App.vue'
import AboutComp from './components/AboutComp'
import HomeComp from './components/HomeComp'
import VueRouter from 'vue-router'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.use(VueRouter)
const routes = [
  {path: '/', component: HomeComp},
  {path: '/about', component: AboutComp},
]

const router = new VueRouter({
  routes
})

Vue.config.productionTip = false

new Vue({
  router : router,
  render: h => h(App),
}).$mount('#app')
