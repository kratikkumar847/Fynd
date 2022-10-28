<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <NewCompo /> -->
    <!-- <NewCompo2 /> -->
    <button type="button" class="btn btn-warning">Warning</button>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import NewCompo from './components/NewCompo.vue'
// import NewCompo2 from './components/NewCompo2.vue'
export default {
  name: "App",
  components: {
    // HelloWorld,
    // NewCompo,
    // NewCompo2
  },
  
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
