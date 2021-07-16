<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
  }
}
</script>

<style>
html{
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
