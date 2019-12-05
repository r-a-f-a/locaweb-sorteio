<template>
  <div class="roulet-section">
    <nav>
      <ul class="roulet">
        <li class="roulet-item" :class="{ 'arrow' : index === 3 }" v-for="(item, index) in items" :key="index">
          <!-- <span class="roulet-span">{{item.funcionario}}</span> -->
          <img :class="{ 'active' : index === 3 }" :src="getImage(item.id)" >
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
var shuffle = require('shuffle-array')
export default {
  name: 'sort',
  props: ['collaborators', 'winner'],
  data () {
    return {
      index: 0,
      choosedIndex: 0,
      sliced: [],
      image: {
        size: '260px'
      },
      state: false,
      hooks: {
        beforeEnter: (el) => {
          this.makeSort()
          console.log('BEFORE ENTER')
        },
        afterEnter: (el) => {
          el.className += ' ani-running-enter-to'
          console.log('SELECIONADO', this.sliced[97])
        },
        enterCancelled: function (el) {
          console.log('ENTER CANCELLED')
        },

        beforeLeave: function (el) {
          console.log('BEFORE LEAVE')
        },

        leave: function (el, done) {
          console.log('LEAVE')
          done()
        },
        afterLeave: function (el) {
          console.log('AFTER LEAVE')
        },

        leaveCancelled: function (el) {
          console.log('LEAVE CANCELLED')
        }
      }

    }
  },
  methods: {
    getImage (index) {
      return require(`../../../../assets/povofeio/${index}.jpg`)
    },
    makeSort () {
      this.setSliced()
      this.setChoosed()
      this.changeIndexChoosed()
    },
    onEnter () {
      console.log('INICIOU')
    },
    onEnd () {
      console.log('PAROU')
    },
    setSliced () {
      var sliced = shuffle.pick(this.collaborators, { picks: 60 })
      if (sliced.length < 100) sliced = this.checkQtty(sliced)
      this.sliced = sliced
    },
    checkQtty (sliced) {
      const diff = 100 - sliced.length
      const turns = Math.ceil(diff / sliced.length)
      for (let i = 0; i < turns; i++) {
        sliced = sliced.concat(sliced)
      }
      return sliced.slice(0, 100)
    },
    setChoosed () {
      this.choosedIndex = Math.floor((Math.random() * this.sliced.length))
    },
    changeIndexChoosed () {
      var antepenultIndex = this.sliced.length - 3
      // console.log('ANTEPENULT INDEX', antepenultIndex)
      // console.log('CHOOSED INDEX', this.choosedIndex)
      var choosed = this.sliced[this.choosedIndex]
      // console.log('CHOOSED', choosed)
      var antepenult = this.sliced[antepenultIndex]
      // console.log('ANTEPENULT', antepenult)
      this.sliced[antepenultIndex] = choosed
      this.sliced[this.choosedIndex] = antepenult
    },
    start () {
      clearInterval(this.interval)
      const _this = this
      _this.index = 0
      this.interval = setInterval(function () {
        _this.next()
      }, 100)
      this.$events.emit('sort-start')
    },
    prev () {
      const index = this.index - 1
      this.index = (index <= 0) ? 0 : index
    },
    next () {
      console.log('NEXT')
      console.time('NEXT')
      const index = this.index + 1
      const last = this.sliced.length - 7
      this.index = (index > last) ? last : index
      console.timeEnd('NEXT')
    }
  },
  created () {
    this.makeSort()
    const that = this
    this.$events.off('button-pressed-enter')
    this.$events.on('button-pressed-enter', () => {
      that.makeSort()
      that.start()
    })
    this.$events.off('button-pressed-prev')
    this.$events.on('button-pressed-prev', () => {
      that.prev()
    })
    this.$events.off('button-pressed-next')
    this.$events.on('button-pressed-next', () => {
      that.next()
    })
  },
  mounted () {
    document.querySelector('body').focus()
    // this.makeSort()
  },
  filters: {
    firsLastName: function (val) {
      var arr = val.split(' ')
      var str = `${arr[0]} ${arr[arr.length - 1]}`
      return str
    }
  },
  watch: {
    index (val) {
      this.$events.emit('user-sort', this.items[3])
      if (val === 93) {
        clearInterval(this.interval)
        // alert('ACABOU MOSTRA O VENCEDOR')
        this.$events.emit('sort-finished')
        this.$events.emit('add-overlay')
      }
      // console.log('WINNER', )
      // this.winner =
    }
  },
  computed: {

    items () {
      const end = this.index + 7
      const items = this.sliced.slice(this.index, end)
      // items[3].class = 'active'
      return items
    },
    style () {
      return {
        sortBox: {
          width: `calc(5 * ${this.image.size})`,
          'min-width': `calc(5 * ${this.image.size})`
        },
        animation: {
          '--left': `calc(95 * -${this.image.size})`
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.sort {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 250px;
  margin: 20px 0;
}

.sort-box {
  height: 100%;
  border: 1px solid white;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
}
.arrow:before {
  content: "";
  position: absolute;
  z-index:1034!important;
  border-left: 45px solid transparent;
  border-right: 45px solid transparent;
  border-top: 50px solid #f00943;
  margin-left: 94px!important;
  margin-top: -55px!important;

}

.sort-line {
  position: absolute;
  left: 5px;
  width: max-content;
}

.sort-item {
  display: inline-flex;
  width: 250px;
  height: 250px;
  margin: 0 5px;
  border: 1px solid green;
}
.sort-item img {
  width: 100%;
}
.sort-item b{
  background-color: #fff;
  color: #000;
  width: 100%;
  height: 60px;
  text-align: center;
  font-weight: bold;
}
.ani-running-enter-active,
.ani-running-enter-to
{
  animation-name: running;
  animation-duration: 10s;
  animation-delay: 1000ms;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;
}

@keyframes running {
    from {left: -5px;}
    to {left: var(--left);}
}

.roulet-item span {
  border: 1px solid black;
  position: absolute;
  top: 100px;
  z-index: 999;
  left: 110px;
  color: #000;
  background-color:#fff;
  z-index: 1036 !important;
}
</style>
