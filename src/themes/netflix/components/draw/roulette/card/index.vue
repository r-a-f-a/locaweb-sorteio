<template>
  <div class="card-avatar zindex" :class="classCard" id="card-avatar">
    <template v-if="!have_winner">
      <img v-if="getImage(user.id)" class="sort-avatar" :src="getImage(user.id)" alt="">
      <template v-else>
      <div class="winner" v-if="user.id">
        <div class="initials">{{getInitial(user.funcionario)}}</div>
        <div class="name">{{user.funcionario}}</div>
      </div>  
      <img src="../../../../assets/avatar/Avatar-Default-Tela-de-Sorteio.jpg" v-else>
      </template>
    
    </template>
    <template v-else>
      <img v-if="getImage(user.id)" class="sort-avatar" :src="getImage(user.id)" alt="">
      <div class="winner" v-else>
        <div class="initials">{{getInitial(user.funcionario)}}</div>
        <div class="name">{{user.funcionario}}</div>
      </div>
    </template>
  </div>
</template>

<script>
import initials from 'initials'
export default {
  name: 'card-avatar',
  props: ['user'],
  data () {
    return {
      // user: { "id": "xoxo22", "funcionario": "Igor da Cruz Martins ", "email": "igor.martins@socialminer.com", "diretoria": "Social Miner" },
      have_winner: false
    }
  },
  methods: {
    getInitial(name){
      return initials(name).substring(0,2)
    },
    getImage (index) {
      // const index = Math.floor(Math.random(0, 10) * 10)
      try {
        const image = require(`../../../../assets/employees/${index}.jpg`) || null
        return image
      } catch (error) {
        return false
        // return require(`../../../../assets/avatar/Avatar-Default-Tela-de-Sorteio.jpg`)
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
  border-radius: 10px !important;
  /* border: 8px solid #fff !important; */
  /* border-opacity: 0; */
  margin-top: 90px!important;
}
.winner {
  width: 100%;
  height: 100%;
  background: #fff;
  position: relative;
}
.winner  .initials{
  position: absolute;
    width: 100%;
    height: 100%;
    top: 10px;
    font-size: 100px;
    text-align: center;
    padding-top: 25%;
    color: #000;
}
.winner  .name{
  position: absolute;
    width: 100%;
    bottom: 10px;
    padding-top: 10%;
    padding-bottom: 10%;
    font-size: 25px;
    text-align: center;
    color: #000;
}
</style>
