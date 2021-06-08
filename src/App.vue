<template>
  <div id="app">
    <router-view name="Apps"></router-view>
    <Home></Home>
  </div>
</template>

<script>
import Home from "./page/Home";
export default {
  name: 'App',
  components: {Home},
  mounted() {
  }
}
</script>

<style>
html{
  background: #a6cdf4;
  margin: 0
}
.router-link-active {
  /*路由下划线*/
  text-decoration: none;
}
a{
  text-decoration: none;
}

</style>
