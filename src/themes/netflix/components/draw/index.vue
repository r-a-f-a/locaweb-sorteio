<template>
  <div>
    <button style="position:fixed;z-index:9999" @click="change()">MUDAR</button>
    <div :class="overlay"></div>
    <transition name="fadeUp">
    <roulette :configs='configs' :collaborators='collaborators' :user="user" v-if="roulette"></roulette>
    <awards :configs="configs" :user="user" v-else></awards>
    </transition>
  </div>
</template>

<script>
import roulette from './roulette'
import awards from './awards'
require('vue2-animate/dist/vue2-animate.min.css')
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
      user: { id: 9, funcionario: 'LARISSA ENDO', email: 'LARISSA.ENDO@LOCAWEB.COM.BR', situacao: 'Férias', area: 'LOCAWEB - ENDOMARKETING', diretoria: 'LOCAWEB' },
      have_winner: false
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
    },
    overlay () {
      if (this.have_winner) {
        return 'overlay'
      }
      return ''
    }
  },
  created () {
    this.$events.off('user-sort')
    this.$events.on('user-sort', (user) => {
      this.user = user
    })
    this.$events.on('sort-finished', () => {
      this.have_winner = true
    })
    this.$events.on('sort-start', () => {
      this.have_winner = false
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
