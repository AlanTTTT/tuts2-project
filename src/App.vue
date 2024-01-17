<template>
  <topNav/>
  <part1/>
</template>

<script>
import part1 from './components/eventRegister/components/csContent.vue'
import topNav from './components/topNav.vue'

export default {
  name: 'App',
  components: {
    part1,
    topNav,
  }
}
</script>

<style>
@import "./app.scss";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
