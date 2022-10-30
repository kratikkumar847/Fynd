<template>
  <div id="app">
    <NewCompo />
  </div>
</template>

<script>
import NewCompo from './components/NewCompo.vue'

export default {
  name: 'App',
  components: {
    NewCompo
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
