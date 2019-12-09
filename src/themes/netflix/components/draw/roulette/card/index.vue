<template>
  <div class="card-avatar" :class="classCard" id="card-avatar">
      <img v-if="user.id" class="sort-avatar" :src="getImage(user.id)" alt="">
      <img src="../../../../assets/avatar/flash.jpg" v-else>
      <div class="user-details bottom-left" v-if="user.id">
        <h1>{{user.funcionario | pasedName }}</h1>
        <p>{{user.area}}</p>
        <p>{{user.email}}</p>
      </div>
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
  filters: {
    pasedName: function (value) {
      const fullName = value.split(' ')
      return fullName[0] + ' ' + fullName[fullName.length - 1]
    }
  },
  methods: {
    getImage (index) {
      // const index = Math.floor(Math.random(0, 10) * 10)
      try {
        const image = require(`../../../../assets/employees/${index}.jpg`) || null
        return image
      } catch (error) {
        return `https://api.adorable.io/avatars/285/${index}.png`
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

<style>

</style>
