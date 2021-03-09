<template>
  <div id="logo" class="hello">
    <img  src="@/assets/logo.png">
    <h1>{{ msg }}</h1>
    <a>v1.00</a>
  </div>
</template>a

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'AkiSky'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
#logo{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
