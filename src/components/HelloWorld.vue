<template>
  <div class="hello">
    <titleCOMP bgColor="#000000" bgHover="#fff000" title="FUnciona?"></titleCOMP>

<titleCOMP bgColor="red" bgHover="blue" title="FUnciona?"></titleCOMP>

  </div>
</template>

<script>
import titleCOMP from './title'
export default {
  components: {
    titleCOMP
  },
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
</style>
