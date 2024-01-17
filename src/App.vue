<template>
  <topNav/>
<<<<<<< HEAD
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
=======
  <part1/>
</template>

<script>
import part1 from './components/eventRegister/components/csContent.vue'
>>>>>>> 39441a2bdf7477e9c800dc6a1ac38a601bd60069
import topNav from './components/topNav.vue'

export default {
  name: 'App',
  components: {
    part1,
    topNav,
<<<<<<< HEAD
    carousel,
    part4
=======
>>>>>>> 39441a2bdf7477e9c800dc6a1ac38a601bd60069
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
