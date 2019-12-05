<template>
  <div class="timer">
    <div class="number"> {{ number }} </div>
    <button @click="stopTime" :disabled="!running">STOP</button>
    <button @click="start" :disabled="running">START</button>
    <button @click="restart">RESTART</button>
  </div>
</template>

<script>
export default {
  name: 'timer',
  data () {
    return {
      number: 10,
      running: true,
      interval: {}
    }
  },
  methods: {
    start () {
      const _this = this
      this.running = true
      _this.interval = setInterval(() => {
        _this.number--
      }, 1000)
    },
    stopTime () {
      clearInterval(this.interval)
      this.running = false
    },
    restart () {
      this.number = 10
      this.running = false
      clearInterval(this.interval)
    }
  },
  created () {
    this.start()
  },
  mounted () {
    this.$events.on('timer-start', () => {
      this.start()
    })

    this.$events.on('timer-stop', () => {
      this.stopTime()
    })

    this.$events.on('timer-restart', () => {
      this.restart()
    })
  },
  watch: {
    number: function () {
      const _this = this
      if (_this.number === 0) {
        clearInterval(_this.interval)
      }
    }
  }
}
</script>

<style style="scss">

.number {
  font-size: 150px;
  color: red;
}
</style>
