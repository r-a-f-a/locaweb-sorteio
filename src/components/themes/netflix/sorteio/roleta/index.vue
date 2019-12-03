<template>
  <div class="roulet-section">
    <nav>
      <ul class="roulet">
        <li class="roulet-item" v-for="item in 3" :key="item">
            <img :src="'https://api.adorable.io/avatars/285/' + Math.random(1,99999) + '@adorable.io.png'" >
        </li>

        <li class="roulet-item active">
            <img :src="'https://api.adorable.io/avatars/285/' + Math.random(1,99999) + '@adorable.io.png'" >
        </li>

        <li class="roulet-item" v-for="item in 3" :key="item">
            <img :src="'https://api.adorable.io/avatars/285/' + Math.random(1,99999) + '@adorable.io.png'" >
        </li>
      </ul>
    </nav>
  </div>
  <!-- <div id="sort" class="sort" :style="style.animation">
    <select name="" id="" v-model="state">
      <option value=true>T</option>
      <option value=false>F</option>
    </select>
    <div class="sort-box" :style="style.sortBox">
      <transition name="ani-running" mode="out-in" v-on="hooks">
        <div class="sort-line" v-if="state == 'true'" :style="style">
          <div v-for="(item, k) in sliced" :key="k" class="sort-item">
            <img :src="'https://picsum.photos/200/300?x=' + Math.random(1,99999)" >
            <b>{{ item.funcionario  | firsLastName}}</b>
          </div>
        </div>
      </transition>
    </div>
  </div> -->
</template>

<script>
var shuffle = require('shuffle-array')
export default {
  name: 'sort',
  props: ['collaborators'],
  data () {
    return {
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
    }
  },
  created () {
    const that = this
    this.$events.off('button-pressed-enter')
    this.$events.on('button-pressed-enter', () => {
      that.state = 'true'
    })
    this.$events.off('button-pressed-prev')
    this.$events.on('button-pressed-prev', () => {
      that.state = 'false'
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
  computed: {
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
</style>
