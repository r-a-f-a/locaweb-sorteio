<template>
  <div class="container">
    <logoCorner></logoCorner>
    <div class="sort-content">
      <p class="sort-content-title">SELECIONE O TIPO DE <span class="lw-red">SORTEIO</span></p>
      <div class="container-cards">
        <Cards :dataCard="cards"></Cards>
      </div>
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
          this.dataCard = res.data
        })
    },
    checkAwards (awards) {
      // console.log('CHECK AWARDS', awards)
      // const total = awards.length
      // var winners = 0
      // for (let index = 0; index < total; index++) {
      //   const award = awards[index]
      //   console.log('AWARD WINNER', award)
      //   if (award.winner !== '') {
      //     winners++
      //   }
      // }
      return awards.length === 0
    }
  },
  created () {
    this.getConfigs()
    this.$events.emit('awards-set-winner', false)
  },
  computed: {
    cards () {
      const cards = this.dataCard
      const total = cards.length
      for (let index = 0; index < total; index++) {
        const card = cards[index]
        cards[index].check = this.checkAwards(card.awards)
      }
      return cards
    }
  }
}
</script>

<style scoped>
.container-cards{ 
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
