<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "../src/components/Header";
export default {
  name: 'App',
  components: {Header},
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
