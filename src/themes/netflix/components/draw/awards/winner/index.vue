<template>
  <div class="winner">
    <div class="detail">
        <h2 class="lw-red">{{ user.funcionario }}</h2>
        <p>
          {{ user.area }} <br/>
          {{ user.email}}
        </p>
    </div>
    <div class="award" v-if="award">
      <span>GANHOU</span>
      <h2 class="lw-blink">{{award.name}}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'winner',
  props: ['user'],
  data () {
    return {
      award: false
    }
  },
  created () {
    this.$events.on('awards-set-winner', (payload) => {
      this.award = payload
    })
  }
}
</script>

<style scoped>
.winner {
  margin: 50px;
}
.detail{
  display: flex;
  flex-direction: column;
  align-content: center;
}
.detail h2 {
  font-size: 50pt;
}
.detail p{
  font-size: 32pt;
  margin-top: -5%;
}
.award{
  margin-top:10px;
}
.award h2{
   font-size: 50pt;
   margin:0px;
   color:#fff;
   text-shadow: 4px 4px #000;
   animation: blinkerColor 400ms linear infinite;
}
.award span{
  color:#fff;
  text-shadow: 4px 4px #000;
  font-weight: 300;
   font-size: 40pt;
}
@keyframes blinkerColor {
  100% {
    color:#f00943;
    /* text-shadow: 5px 5px #f00943; */
  }
}
</style>
