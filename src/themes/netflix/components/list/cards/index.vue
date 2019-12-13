<template>
  <div class="cards">
    <router-link v-for="(sorteio, index) in dataCard" :key="index" tag="a" :to="`draw/${sorteio.id}`">
      <div class="card">
        <div class="card-img" v-bind:class="{ active: index === selected }">
          <img :src="parseImage(sorteio, index)" alt="Card image" />
        </div>
        <p class="card-title">{{ sorteio.name }}</p>
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
      selected: 0
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
      this.$router.push(`/draw/${draw.id}`)
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
