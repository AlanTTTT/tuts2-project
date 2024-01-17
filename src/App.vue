<template>
  <topNav/>
  <carousel/>
  <part2 />
  <part3/>
  <part4/>
</template>

<script>
import carousel from './components/carousel.vue'
import part2 from './components/part2.vue'
import part3 from './components/part3.vue'
import part4 from './components/part4.vue'
import topNav from './components/topNav.vue'

export default {
  name: 'App',
  components: {
    part2,
    part3,
    topNav,
    carousel,
    part4
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
