<template>
  <div class="card-avatar" :class="classCard" id="card-avatar">
      <img v-if="user.id" class="sort-avatar" :src="getImage(user.id)" alt="">
      <img src="../../../../assets/avatar/Avatar-Default-Tela-de-Sorteio.jpg" v-else>
  </div>
</template>

<script>
export default {
  name: 'card-avatar',
  props: ['user'],
  data () {
    return {
      have_winner: false
    }
  },
  methods: {
    getImage (index) {
      // const index = Math.floor(Math.random(0, 10) * 10)
      try {
        const image = require(`../../../../assets/employees/${index}.jpg`) || null
        return image
      } catch (error) {
        return require(`../../../../assets/avatar/Avatar-Default-Tela-de-Sorteio.jpg`)
      }
    }
  },
  computed: {
    classCard () {
      if (this.have_winner) {
        return 'zindex selectedAvatar'
      }
      return ''
    }
  },
  created () {
    this.$events.on('sort-finished', () => {
      this.have_winner = true
    })
    this.$events.on('sort-start', () => {
      this.have_winner = false
    })
  }
}
</script>

<style scoped>
.card-avatar{
  margin-top: 90px!important;
}
</style>
