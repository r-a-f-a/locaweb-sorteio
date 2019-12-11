<template>
  <div class="timer" :class="overlayClass">
    <div class="number" v-if="number !== 0"> {{ number }} </div>
    <div class="sort-message" v-else>
      <span class="lw-red">CONTAGEM ENCERRADO</span>
      <!-- <button @click="showSort" class="btn btn-red btn-rounded">PRÊMIOS</button>
      <button class="btn btn-red btn-rounded"> SORTEAR</button> -->
    </div>
  </div>
</template>
<script>
export default {
  name: 'timer',
  data () {
    return {
      number: 10,
      running: true,
      interval: {},
      have_winner: false
    }
  },
  methods: {
    start () {
      const _this = this
      this.running = true
      _this.interval = setInterval(() => {
        if (_this.number === 0) {
          _this.stopTime()
          return false
        }
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
      this.start()
    },
    showSort () {
      this.$events.emit('sort-change')
    }
  },
  created () {
    this.$events.on('button-pressed-home', () => {
      if (this.running === true) {
        this.stopTime()
      } else {
        this.start()
      }
    })
    this.start()
    this.$events.on('button-pressed-home', () => {
      if (this.running) {
        this.stopTime()
        return false
      }
      this.start()
    })
    this.$events.on('sort-finished', () => {
      this.have_winner = true
    })
    this.$events.on('sort-start', () => {
      this.have_winner = false
    })
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

    this.$events.on('timer-change-component', () => {
      this.roulette = !this.roulette
      console.log('ROULETTE', this.roulette)
    })
  },
  watch: {
    number: function () {
      const _this = this
      if (_this.number === 0) {
        clearInterval(_this.interval)
      }
    }
  },
  computed: {
    overlayClass () {
      if (this.winner) {
        return 'zindex'
      }
      return ''
    }
  }
}
</script>

<style style="scss" scoped>
.timer {
  display:flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.number {
  text-align: center;
  font-size: 280pt;
  color: #f00943;
  margin-top: 90px;
}
.btn {
  width: 284px;
  margin: 20px;
}
.lw-red {
  text-align: center;
  z-index: 1034;
  font-size: 100px!important;
}
.sort-message {
  margin-left: 70px;
  margin-top: 56px;
}
</style>
