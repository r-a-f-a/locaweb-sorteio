<template>
  <div class="cards">
    <router-link v-for="(sorteio, index) in dataCard" :key="index" tag="a" :to="`draw/${sorteio.id}`" :event="!sorteio.check ? 'click' : ''">
      <div class="card">
        <div class="card-img">
          <img :src="parseImage(sorteio, index)" alt="Card image" />
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'cards',
  props: ['dataCard'],
  data () {
    return {
      selected: null
    }
  },
  computed: {
    validateSort () {
      if (this.dataCard.validation) {
        return 'sort-finished'
      }
      return ''
    }
  },
  created () {
    this.$events.off('button-pressed-prev')
    this.$events.on('button-pressed-prev', () => {
      const prev = this.selected - 1
      this.selected = prev >= 0 ? prev : 0
    })
    this.$events.on('button-pressed-next', () => {
      const next = this.selected + 1
      const total = this.dataCard.length - 1
      this.selected = next <= total ? next : total
    })
    this.$events.off('button-pressed-enter')
    this.$events.on('button-pressed-enter', () => {
      const draw = this.dataCard[this.selected]
      if (!draw.check) {
        this.$router.push(`/draw/${draw.id}`)
      }
    })
  },
  methods: {
    parseImage (sort, index) {
      if (index === this.selected) {
        return require(`../../../assets/sorteios/${sort.id}-white.svg`)
      } else {
        return require(`../../../assets/sorteios/${sort.id}.svg`)
      }
    },
    mouseOver (index) {
      this.$set(this.dataCard[index], 'hover', true)
      // this.parseImage(sort)
    },
    mouseLeave (index) {
      this.$delete(this.dataCard[index], 'hover', false)
    }
  }
}
</script>

<style>

</style>
