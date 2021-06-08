<template>
  <div>
    <Header></Header>
    <Contents></Contents>
  </div>
</template>

<script>
import Header from "../components/Header";
import Contents from "../components/Contents";
export default {
  name: "Home",
  components: {Header,Contents}
  // components: {Login,Footer},
}
</script>

<style scoped>

</style>
