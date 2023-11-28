<template>
  <topNav/>
  <part1 />
  <part2 />
  <part3/>
</template>

<script>
import part1 from './components/part1.vue'
import part2 from './components/part2.vue'
import part3 from './components/part3.vue'
import topNav from './components/topNav.vue'

export default {
  name: 'App',
  components: {
    part1,
    part2,
    part3,
    topNav
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
