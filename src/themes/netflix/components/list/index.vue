<template>
  <div class="container">
    <logoCorner></logoCorner>
    <div class="sort-content">
      <p class="sort-content-title">SELECIONE O TIPO DE <span class="lw-red">SORTEIO</span></p>
      <Cards :dataCard="dataCard"></Cards>
    </div>
  </div>
</template>

<script>
import Cards from './cards'
import logoCorner from '../logoCorner'
export default {
  metaInfo: {
    bodyAttrs: {
      class: ['sorteios']
    }
  },
  name: 'sorteios',
  components: {
    Cards,
    logoCorner
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
          const cards = res.data[0]
          this.dataCard = res.data
          this.dataCard.push(cards)
        })
    }
  },
  created () {
    this.getConfigs()
  }
}
</script>

<style>
</style>
