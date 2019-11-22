<template>
  <div id="app" :style="appStyles">
    <router-link tag="a" to="/">
      <img class="logo-coner" src="https://images.tcdn.com.br/static_inst/escoladeecommerce/prod/wp-content/uploads/2017/03/logo_locaweb.png" alt="">
    </router-link>
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
  background: #233344 !important;
  color: #fff !important;
}
.logo-coner{
  width: 250px;
  height: auto;
}
</style>
<style lang="scss" scoped>
$base-style: "./components/themes/series/styles.css";
// $importStyle: var(--style);
// @import url(#{$base-style});
// @import url(#{$importStyle});
// @import "./components/themes/series/styles.css";
</style>
