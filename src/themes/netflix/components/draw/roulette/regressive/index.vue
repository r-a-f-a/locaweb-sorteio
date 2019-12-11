<template>
  <div class="regressive">
    <div class="detail">
        <timer v-if="showTimer"></timer>
        <span class="lw-red" v-else>CONTAGEM REGRESSIVA</span>
    </div>
  </div>
</template>
<script>
import timer from '../timer'

export default {
  name: 'regressive',
  components: {
    timer
  },
  data () {
    return {
      showTimer: false
    }
  },
  methods: {
    timer () {
      setTimeout(() => {
        this.showTimer = true
      }, 3000)
    }
  },
  created () {
    this.timer()
  }
}
</script>

<style scoped>
.lw-red {
  text-align: center;
  z-index: 1034;
  font-size: 90px!important;
}
</style>
