<template>
<div class='awards'>
    <div class="container">
        <div class="row">
            <img class="logo-corner" src="../../../assets/logos/logo-default.png" alt="">
        </div>
        <div class="grid">
            <div class="lw-col">
                <winner :user="user"></winner>
            </div>
            <div class="lw-col">
                <sort :configs="configs" :user="user" ></sort>
            </div>
        </div>
    </div>
</div>

</template>

<script>
import winner from './winner'
import sort from './sort'
export default {
  metaInfo: {
  // Children can override the title.
    bodyAttrs: {
      class: ['awards']
    }
  },
  data () {
    return {
      winner: false
    }
  },
  name: 'awards',
  props: ['configs', 'collaborators', 'user'],
  components: {
    winner,
    sort
  },
  created () {
    this.$events.on('awards-set-winner', () => {
      this.winner = true
    })
    this.$events.off('button-pressed-prev')
    this.$events.off('button-pressed-next')

    this.$events.off('button-pressed-home')
    this.$events.on('button-pressed-home', () => {
      console.log('IS WINNER', this.winner)
      if (this.winner) {
        this.$router.push('/list')
      }
    })
  }
}
</script>

<style scoped>
.awards {
  height: 100vh;
  background-image: url("../../../assets/bg/Background-Tela-5-opacity.jpg");

}
.lw-col {
  width: auto!important;
}
</style>
