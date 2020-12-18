<template>
  <div class="roulet-section">
    <nav>
      <ul class="roulet">
        <li class="roulet-item" :class="{ 'arrow' : index === 3 }" v-for="(item, index) in items" :key="index">
          <img :class="{ 'active' : index === 3 }"  v-if="getImage(item.id)" :src="getImage(item.id)" >
          <div class="roulet-span" :style="`background:${getColor()};`" v-else>
            <span class="initial">{{getInitial(item.funcionario)}}</span>
            <span class="name">{{item.funcionario}}</span>
          </div>
          
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
var shuffle = require('shuffle-array')
import initials from 'initials'
export default {
  name: 'sort',
  props: ['collaborators', 'winner', 'configs','award'],
  data () {
    return {
      index: 0,
      choosedIndex: 0,
      sliced: [],
      list: [],
      image: {
        size: '260px'
      },
      state: false
    }
  },
  methods: {
    getInitial(name){
      return initials(name).substring(0,2)
    },
    getColor () {
      return `#${Math.floor(Math.random()*16777215).toString(16)}`;
    },
    async blacklist (collaborators) {
      console.log('COLLABS', collaborators)
      const blacklist = this.configs.blacklist
      var filteredCollab = await collaborators.filter((collab) => {
        return blacklist.indexOf(collab.id) <= -1
      })
      console.log('BLACKLIST', filteredCollab)
      this.list = filteredCollab
      return filteredCollab
    },
    getImage (index) {
      try {
        const image = require(`../../../../assets/employees/${index}.jpg`) || null
        return image
      } catch (error) {
        return false
      }
    },
    makeSort () {
      this.$events.emit('roulette-showRegressive', false)
      this.setSliced()
      this.setChoosed()
      this.changeIndexChoosed()
    },
    async setSliced () {
      var sliced = shuffle.pick(this.collaborators, { picks: 100 })
      sliced = await this.blacklist(sliced)
      if (sliced.length > 0 && sliced.length < 100) sliced = this.checkQtty(sliced)
      this.sliced = sliced
    },
    checkQtty (sliced) {
      const total = sliced.length
      const diff = 100 - total
      const turns = Math.ceil(diff / total)
      var newSliced = []
      for (let i = 0; i < turns; i++) {
        newSliced = newSliced.concat(sliced)
      }
      sliced = sliced.concat(newSliced)
      return sliced.slice(0, 100)
    },
    setChoosed () {
      this.choosedIndex = Math.floor((Math.random() * this.sliced.length))
    },
    changeIndexChoosed () {
      var antepenultIndex = this.sliced.length - 3
      var choosed = this.sliced[this.choosedIndex]
      var antepenult = this.sliced[antepenultIndex]
      this.sliced[antepenultIndex] = choosed
      this.sliced[this.choosedIndex] = antepenult
    },
    start () {
      clearInterval(this.interval)
      this.index = 0
      this.interval = setInterval(() => {
        this.next()
      }, 20)
      this.$events.emit('sort-start')
    },
    prev () {
      const index = this.index - 1
      this.index = (index <= 0) ? 0 : index
    },
    next () {
      const index = this.index + 1
      const last = this.sliced.length - 7
      this.index = (index > last) ? last : index
    }
  },
  created () {
    this.makeSort()
    this.$events.emit('show-reSort', false)
    this.$events.off('button-pressed-enter')
    this.$events.on('button-pressed-enter', () => {
      this.makeSort()
      this.start()
    })
    this.$events.off('button-pressed-prev')
    this.$events.on('button-pressed-prev', () => {
      this.$router.push('/list')
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
        this.$events.emit('add-overlay')
        this.$events.emit('sort-finished')
        this.$events.emit('roulette-showRegressive', true)
        // this.$events.emit('add-blacklist', this.award)
        this.$events.emit('set-winner', this.award)
      }
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
  border-left: 25px solid transparent;
  border-right: 25px solid transparent;
  border-top: 30px solid #f00943;
  margin-left: 114px!important;
  margin-top: -45px!important;
}
.sort-line {
  position: absolute;
  left: 5px;
  width: max-content;
}

.sort-item {
  display: inline-flex;
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
.roulet-item div {
  position: absolute;
  color: #000;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  object-fit: cover !important;
  // background: #fff;
  text-align: center;
  font-size: 20px;
  background-image: url('../../../../assets/icons/neon-selector.png');
  background-repeat: no-repeat;
  background-position: 10px 10px;
  background-size: 50px;
}
.roulet-item div .initial{
    font-size: 80px;
    clear: both;
    position: absolute;
    top: 15px;
    width: 100%;
    left: 0;
}
.roulet-item div .name{
     width: 100%;
    float: left;
    bottom: 20px;
    position: absolute;
    left: 0;
}

</style>
