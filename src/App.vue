<template>
  <div id="app">
    <cmp-layout></cmp-layout>
  </div>
</template>

<script>
import cmpLayout from "./components/cmp-layout.vue";

export default {
  name: "app",
  components: {
    cmpLayout
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #111;
}
html {
  scroll-behavior: smooth;
}
</style>
