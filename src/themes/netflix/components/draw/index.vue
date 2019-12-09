<template>
  <div>
    <button style="position:fixed;" @click="change()">MUDAR</button>
    <transition name="fade">
    <roulette :configs='configs' :collaborators='collaborators' :user="user" v-if="roulette"></roulette>
    <awards :configs="configs" :user="user" v-else></awards>
    </transition>
  </div>
</template>

<script>
import roulette from './roulette'
import awards from './awards'
require('vue2-animate/dist/vue2-animate.min.css')
// import timer from './timer'
export default {
  metaInfo: {
    bodyAttrs: {
      class: ['sorteio']
    }
  },
  name: 'sorteio',
  data () {
    return {
      roulette: true,
      collaborators: [],
      configs: [],
      user: {}
    }
  },
  components: {
    roulette,
    awards
  },
  filters: {
    pasedName: function (value) {
      const fullName = value.split(' ')
      return fullName[0] + ' ' + fullName[fullName.length - 1]
    }
  },
  methods: {
    change () {
      this.roulette = !this.roulette
    },
    getImage (index) {
      // const index = Math.floor(Math.random(0, 10) * 10)
      try {
        const image = require(`../../assets/povofeio/${index}.jpg`) || null
        return image
      } catch (error) {
        return null
      }
    },
    getCollaborators () {
      this.$api.get(`/${this.type}`)
        .then(res => {
          this.collaborators = res.data
        })
    },
    getConfigs () {
      this.$api.get(`/picker/${this.type}`)
        .then(res => {
          this.configs = res.data
        })
    }
  },
  computed: {
    type () {
      return this.$route.params.type
    }
  },
  created () {
    const _this = this
    this.$events.off('user-sort')
    this.$events.on('user-sort', (user) => {
      _this.user = user
    })
  },
  mounted () {
    this.getCollaborators()
    this.getConfigs()
  }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active em versões anteriores a 2.1.8 */ {
  opacity: 0;
}
</style>
