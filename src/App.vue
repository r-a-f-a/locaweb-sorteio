<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>

export default {
  metaInfo: {
    title: 'Locaweb Sorteio',
    link: [
      { rel: 'stylesheet', href: require(`./themes/${process.env.VUE_APP_THEME}/styles.css`) }
    ]
  },
  name: 'LOCAWEB-SORTEIO',
  created () {
    // this.appendStyle()
    this.$api.get('/geral').then(data => {
      console.log('RESULT USERS', data)
    })
    this.$api.get('/picker/geral').then(data => {
      console.log('RESULT API GERAL', data)
    })
  }
}
</script>
<style lang="scss" scoped>
</style>
