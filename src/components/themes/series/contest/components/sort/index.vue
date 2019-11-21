<template>
  <div id="sort" class="sort">
    <select name="" id="" v-model="state">
      <option value=true>T</option>
      <option value=false>F</option>
    </select>
    <div class="sort-box">
      <transition name="ani-running" mode="out-in" v-on="hooks">
        <div class="sort-line" v-show="state == 'true'" :style="style">
          <div v-for="(item, k) in sliced" :key="k" class="sort-item">
            {{ item.funcionario | firsLastName }}
          </div>
        </div>
      </transition>
    </div>
  </div>
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
      style: {
        left: '5px'
      },
      state: false,
      hooks: {
        beforeEnter: function (el) {
          console.log('BEFORE ENTER')
        },
        afterEnter: function (el) {
          el.className += ' ani-running-enter-to'
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
    onEnter () {
      console.log('INICIOU')
    },
    onEnd () {
      console.log('PAROU')
    },
    setSliced () {
      this.sliced = shuffle.pick(this.collaborators, { picks: 100 })
    },
    setChoosed () {
      this.choosedIndex = Math.floor((Math.random() * this.sliced.length))
    },
    changeIndexChoosed () {
      var antepenultIndex = this.sliced.length - 3
      console.log('ANTEPENULT INDEX', antepenultIndex)
      console.log('CHOOSED INDEX', this.choosedIndex)
      var choosed = this.sliced[this.choosedIndex]
      console.log('CHOOSED', choosed)
      var antepenult = this.sliced[antepenultIndex]
      console.log('ANTEPENULT', antepenult)
      this.sliced[antepenultIndex] = choosed
      this.sliced[this.choosedIndex] = antepenult
    }
  },
  mounted () {
    this.setSliced()
    this.setChoosed()
    this.changeIndexChoosed()
  },
  filters: {
    firsLastName: function (val) {
      // var arr = val.split(' ')
      // var str = `${arr[0]} ${arr[arr.length - 1]}`
      return 'A'
    }
  }
}
</script>

<style lang="scss" scoped>
.sort {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 150px;
  margin: 20px 0;
}

.sort-box {
  min-width: 800px;
  max-width: 800px;
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
  padding: 40px 67px;
  margin: 0 5px;
  border: 1px solid green;
}

.ani-running-enter-active,
.ani-running-enter-to
{
  // animation: running 5s;
  animation-name: running;
  animation-duration: 5s;
  animation-fill-mode: forwards;
  // animation-timing-function: ease-in-out;
}

// .ani-running-leave-active{
//   animation-name: running;
//   animation-duration: 5s;
//   animation-direction: reverse;
//   animation-fill-mode: forwards;
//   // animation-timing-function: ease-in-out;
// }

// .ani-running-enter
// {
//   // animation: running 5s;
//   animation-name: running;
//   animation-duration: 5s;
//   animation-fill-mode: forwards;
// }

// .ani-running-enter-active {
//   animation: running 5s;
//   // animation-fill-mode: forwards;
// }
// .ani-running-enter-leave {
//   // animation: running 30s;
//   animation-fill-mode: forwards;
// }

@keyframes running {
    from {left: -5px;}
    to {left: -14500px;}
}
</style>
