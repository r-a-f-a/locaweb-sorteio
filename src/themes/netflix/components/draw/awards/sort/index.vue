<template>
  <div class="sort">
    <!-- <button @click="start">START</button> -->
      <div class="cards">
        <div  :ref="`card${index}`" class="card-sort product flip" :class='selected(index,product)' v-for="(product,index) in products"   :key="index">
        <div class='front'>
            <img :src="getImage(index,product , selected(index,product))">
        </div>
        <div class='back'>
        <img src="https://www.extra-imagens.com.br/Games/XboxOne/ConsolesXboxOne/2182949/23591374/Console-Xbox-One-Microsoft-com-Kinect-e-500GB-2182949.jpg" />
        </div>
          <!-- <div :class="`card-image card-image-${index}`"></div> -->
          <!-- <img v-if="selected2 == i" :src="getImage(i, 'On')"> -->
        </div>

      </div>
  </div>
</template>

<script>
export default {
  name: 'sort',
  props: ['configs'],
  data () {
    return {
      winner: false,
      next: false,
      interval: {},
      running: false
    }
  },
  methods: {
    getImage (index, product, selected) {
      const position = index + 1
      const image = {
        active: require(`../../../../assets/icons/Botao${position}-premio-On.png`)
      }
      return image[selected] || require(`../../../../assets/icons/Botao${position}-premio-Off.png`)
    },
    setWinner (index) {
      this.$events.emit('awards-set-winner')
      this.configs.awards[index].winner = '99999'
      this.$api.put(`/picker/${this.type}`, this.configs)
        .then(res => {
          console.log('UPDATED', res)
        })
    },
    start () {
      clearInterval(this.interval)
      this.interval = setInterval(() => {
        this.running = true
        this.next = this.getNum()
      }, 100)
    },
    selected (index, product) {
      if (product.winner) {
        return 'selected'
      }
      let className = ''
      if (index === this.next && product.winner === '') {
        if (!this.running && this.winner) {
          className = 'selected'
        } else {
          className = 'active'
        }
      }
      return className
    },
    getNum  () {
      const num = Math.floor(Math.random() * this.sortable.length)
      const selected = this.sortable[num]
      return selected !== this.next ? selected : this.getNum()
    }
  },
  created () {
    this.start()
    // this.$events.off('button-pressed-next')
    // this.$events.on('button-pressed-next', () => {
    //   this.start()
    // })
    this.$events.off('button-pressed-enter')
    this.$events.on('button-pressed-enter', () => {
      this.running = false
      clearInterval(this.interval)
      this.winner = true
      this.setWinner(this.next)
    })
  },
  computed: {
    type () {
      return this.$route.params.type
    },
    sortable () {
      const array = this.configs.awards
      const total = array.length
      const list = []
      for (let index = 0; index < total; index++) {
        const element = array[index]
        if (element.winner === '') {
          list.push(index)
        }
      }
      return list
    },
    products () {
      return this.configs.awards
    }
  }
}
</script>

<style lang="scss" scoped>
img {
  width: 148px;
  height: 148px;
  border-radius: 6px;
}
.flip {
  border-radius: 6px;
  position: relative;
  >.front,
  >.back {
    display: block;
    transition-timing-function: cubic-bezier(.175, .885, .32, 1.275);
    transition-duration: .5s;
    transition-property: transform, opacity;
  }
  >.front {
    transform: rotateY(0deg);
  }
  >.back {
    position: absolute;
    opacity: 0;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    transform: rotateY(-180deg);
  }
}
.selected {
  >.front {
    transform: rotateY(180deg);
  }
  >.back {
    opacity: 1;
    transform: rotateY(0deg);
  }
}

.sort {
  display: flex!important;
  max-width: 100%;
}
.cards {
  max-width: 800px;
  margin-right: 61px;
  margin-top: 80px;
}
.card-sort {
  margin: 10px;
}
.card-image{
  width:148px;
  height:148px;
}
img {
  width: 230px;
  height: 165px;
}
/*
.card-image-0{
  background: url(`../../../../assets/icons/Botao1-premio-Off.png`)
}
.card-image-0.active{
  background: url(`../../../../assets/icons/Botao1-premio-On.png`)
}
.card-image-1{
  background: url(`../../../../assets/icons/Botao2-premio-Off.png`)
}
.card-image-1.active{
  background: url(`../../../../assets/icons/Botao2-premio-On.png`)
}
.card-image-2{
  background: url(`../../../../assets/icons/Botao3-premio-Off.png`)
}
.card-image-2.active{
  background: url(`../../../../assets/icons/Botao3-premio-On.png`)
}

.card-image-3{
  background: url(`../../../../assets/icons/Botao4-premio-Off.png`)
}
.card-image-3.active{
  background: url(`../../../../assets/icons/Botao4-premio-On.png`)
}

.card-image-4{
  background: url(`../../../../assets/icons/Botao5-premio-Off.png`)
}
.card-image-4.active{
  background: url(`../../../../assets/icons/Botao5-premio-On.png`)
}

.card-image-5{
  background: url(`../../../../assets/icons/Botao6-premio-Off.png`)
}
.card-image-5.active{
  background: url(`../../../../assets/icons/Botao6-premio-On.png`)
}

.card-image-6{
  background: url(`../../../../assets/icons/Botao7-premio-Off.png`)
}
.card-image-6.active{
  background: url(`../../../../assets/icons/Botao7-premio-On.png`)
}

.card-image-7{
  background: url(`../../../../assets/icons/Botao8-premio-Off.png`)
}
.card-image-7.active{
  background: url(`../../../../assets/icons/Botao8-premio-On.png`)
}

.card-image-8{
  background: url(`../../../../assets/icons/Botao9-premio-Off.png`)
}
.card-image-8.active{
  background: url(`../../../../assets/icons/Botao9-premio-On.png`)
}
*/

</style>
