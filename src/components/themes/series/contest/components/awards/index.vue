<template>
  <div class="awards">
    <div class="product flip" :class='selected(index,product)' v-for="(product,index) in products" :key="index" :style="width">
      <div class='front'>
        <img src="./locaweb.png" />
      </div>
      <div class='back'>
        <img src="https://www.extra-imagens.com.br/Games/XboxOne/ConsolesXboxOne/2182949/23591374/Console-Xbox-One-Microsoft-com-Kinect-e-500GB-2182949.jpg" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'awards',
  props: ['configs'],
  data () {
    return {
      winner: false,
      next: false,
      interval: {},
      running: false
    }
  },
  created () {
    const _this = this
    // _this.start()
    this.$events.off('button-pressed-next')
    this.$events.on('button-pressed-next', () => {
      _this.start()
    })
    this.$events.off('button-pressed-enter')
    this.$events.on('button-pressed-enter', () => {
      _this.running = false
      clearInterval(_this.interval)
      _this.winner = true
      _this.setWinner(_this.next)
    })
  },
  methods: {
    setWinner (index) {
      this.configs.awards[index].winner = '99999'
      this.$api.put(`/picker/${this.type}`, this.configs)
        .then(res => {
          console.log('UPDATED', res)
        })
    },
    start () {
      const _this = this
      clearInterval(this.interval)
      this.interval = setInterval(function () {
        _this.running = true
        // if (_this.next >= _this.size) {
        //   _this.next = 0
        //   return
        // }
        // _this.next++
        _this.next = _this.getNum()
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
    },
    width () {
      return {
        width: '240px'
      }
    },
    widthInt () {
      return parseInt(this.$route.params.width)
    },
    maxItems () {
      return this.widthInt * 4
    },
    size () {
      return this.products.length
    },
    calc () {
      return {
        size: this.size * this.widthInt,
        sqrt: Math.round(Math.sqrt(this.size)),
        cubo: Math.pow(this.size, 1 / 3),
        x: this.size % 3,
        multi: this.size % 3 === 0 ? 3 : 2
      }
    },
    matrix () {
      // const limit = this.size % 2
      const multi = this.size % 3 === 0 ? 3 : 2
      const limit = Math.round(this.size * this.widthInt / multi)
      return {
        width: `${limit >= this.maxItems ? this.maxItems : limit}px`
      }
    }
  }
}
</script>

<style lang="scss">

.flip {
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

.awards {
  width: 750px;
}

.product {
  z-index:1;
  position: relative;
  height: 240px;
  width: 240px;
  text-align: center;
  margin: 5px;
  float:left;
}

.product .front img,
.product .back img{
  width: 240px;
  height: 240px;
}
.product.active {

  box-sizing: content-box;
  /* border:0px solid linear-gradient(#14ffe9,#ffeb3b,#ff00e0); */
  /* animation: animate 0.5s linear infinite; */
  /* margin:0px !important; */
  /* transform: scale(0.5) */
}
.product.selected::before {
  left:0;
  content:' ';
  z-index:-1 !important;
  background: linear-gradient(#14ffe9,#ffeb3b,#ff00e0);
  position: absolute;
  width:250px;
  height: 250px;
  /* opacity: 0.7; */
  filter: blur(25px);
  /* border-radius: 50%; */
  animation: animate 500ms linear infinite;
}

.product.selected::after {
  content: ' ';
  z-index:1;
  width:240px;
  height: 240px;
  /* background-color: #fff; */
  box-sizing: border-box;

  border-width: 5px;
  border-style: solid;
  border-image: linear-gradient(#14ffe9,#ffeb3b,#ff00e0) 1 1%;
  border-radius: 10px;
  opacity: 0.9;
  position: absolute;
  left:0px;
  top: 0px;
}

.product.active::before {
  left:0;
  content:' ';
  z-index:-1 !important;
  background: linear-gradient(#14ffe9,#ffeb3b,#ff00e0);
  position: absolute;
  width:250px;
  height: 250px;
  /* opacity: 0.7; */
  filter: blur(25px);
  /* border-radius: 50%; */
  animation: animate 3000ms linear infinite;
}

.product.active::after {
  content: ' ';
  z-index:1;
  width:240px;
  height: 240px;
  /* background-color: #fff; */
  box-sizing: border-box;

  border-width: 5px;
  border-style: solid;
  border-image: linear-gradient(#14ffe9,#ffeb3b,#ff00e0) 1 1%;
  opacity: 0.9;
  position: absolute;
  left:0px;
  top: 0px;
  animation: rotation 400ms linear infinite;
}

.product.active.selected{

  /* position: absolute; */
  /* animation-name: showSelected; */
  /* animation-duration: 5s; */
  /* animation-delay: 1000ms; */
  /* animation-fill-mode: forwards; */
  /* animation-timing-function: ease-in-out; */
}

@keyframes showSelected {
    from {width: 240px; height: 240px;}
    to {width: 740px; height: 740px;}
}
@keyframes animate {
  0%{
    transform:  scale(0.9)

  }
  100%{
    transform:  scale(1)
  }
}

@keyframes rotation {
  0%{
    transform: scale(1)
  }
  100%{
    transform: scale(0)
  }
}
</style>
