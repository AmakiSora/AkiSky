<template>
  <div>
    <MainBlogInput></MainBlogInput>
    <MainBlogContent></MainBlogContent>
  </div>
</template>

<script>
import MainBlogInput from "./MainBlogInput";
import MainBlogContent from "./MainBlogContent";
export default {
  name: "HomeMain",
  components: {
    MainBlogInput,
    MainBlogContent
  }
}
</script>

<style scoped>

</style>
