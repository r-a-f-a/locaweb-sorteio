<template>
  <div class="cards">
    <router-link v-for="(sorteio, index) in dataCard" :key="index" tag="a" :to="`draw/${sorteio.id}`">
      <div class="card">
        <div class="card-img" @mouseover="mouseOver(index)" @mouseleave="mouseLeave(index)">
          <img :src="parseImage(sorteio)" alt="Card image" />
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
      mouseHover: false
    }
  },
  methods: {
    parseImage (sort) {
      if (sort.hover) {
        return require(`../../../assets/sorteios/${sort.id}-white.png`)
      } else {
        return require(`../../../assets/sorteios/${sort.id}.png`)
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
