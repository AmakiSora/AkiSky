<template>
  <div id="app">
    <Home></Home>
  </div>
</template>

<script>
import Home from "./page/Home";
export default {
  name: 'App',
  components: {Home},
}
</script>

<style>
.router-link-active {
  /*路由下划线*/
  text-decoration: none;
}
a{
  text-decoration: none;
}

</style>
