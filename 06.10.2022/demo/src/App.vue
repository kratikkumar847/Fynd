<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <demoCom  message="This is 1st Component"/> 
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import demoCom from './components/demoCom.vue'


export default {
  name: 'App',
  components: {
    HelloWorld,
    demoCom
    
}
}
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
