<template>
<div>hello world</div>
<div>{{$store.state.num}}</div>
</template>

<script>
export default {
  name: "Home"
}
import {useStore} from 'vuex'
</script>

<style scoped>

</style>