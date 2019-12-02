<template>
  <div class="container">
    <div class="row">
      <img class="logo-corner" src="@/assets/themes/netflix/logos/logo-default.png" alt="">
    </div>
    <div class="sort-content">
      <p class="sort-content-title">SELECIONE O TIPO DE <span class="lw-red">SORTEIO</span></p>
      <Cards :dataCard="dataCard"></Cards>
    </div>
  </div>
</template>

<script>
import Cards from './cards'
export default {
  name: 'sorteios',
  components: {
    Cards
  },
  data () {
    return {
      dataCard: []
    }
  },
  methods: {
    getConfigs () {
      this.$api.get('/picker')
        .then(res => {
          this.dataCard = res.data
          console.log(res.data)
        })
    }
  },
  created () {
    this.getConfigs()
    var body = document.querySelector('body')
    body.classList.add('sorteios')
  }
}
</script>

<style>
</style>
