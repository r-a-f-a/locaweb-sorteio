<template>
  <div id="app" :style="appStyles">
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'LOCAWEB-SORTEIO',
  data () {
    return {
      style: `./components/themes/${process.env.VUE_APP_THEME}/styles.css`
    }
  },
  computed: {
    appStyles () {
      return {
        '--style': this.style,
        $importStyle: this.style
      }
    }
  },
  created () {
    this.$api.get('/geral').then(data => {
      console.log('RESULT USERS', data)
    })
    this.$api.get('/picker/geral').then(data => {
      console.log('RESULT API GERAL', data)
    })
  }
}
</script>
<style>
body {
  background: #000000 !important;
  color: #fff !important;
}
</style>
<style lang="scss" scoped>
$base-style: "./components/themes/series/styles.css";
// $importStyle: var(--style);
// @import url(#{$base-style});
// @import url(#{$importStyle});
// @import "./components/themes/series/styles.css";
</style>
