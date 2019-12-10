<template>
  <div>
    <button style="position:fixed;z-index:9999" @click="change()">MUDAR</button>
    <div :class="overlay"></div>
    <button style="position:fixed;" @click="change()">MUDAR</button>
    <transition name="page">
      <roulette :configs='configs' :collaborators='collaborators' :user="user"  v-if="roulette"></roulette>
      <awards :configs="configs" :user="user" ></awards>
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
      if (this.have_winner && this.roulette) {
        return 'overlay'
      }
      return ''
    }
  },
  created () {
    this.$events.off('sort-change')
    this.$events.on('sort-change', () => {
      this.have_winner = !this.have_winner
      this.change()
    })
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
<style lang="scss">
.fade-enter-active, .fade-leave-active {
  transform: translateY(-100%);
  transition: transform 400ms cubic-bezier(0.4, 0.1, 0.7, 0.95);
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

body{
  overflow: hidden;
}

@for $i from 1 through 5 {
  $enter-delay: 400ms;

  .page-enter-active {
    overflow: hidden;
    transition: transform $enter-delay cubic-bezier(0.4, 0.1, 0.7, 0.95);

    .enter-#{$i} {
      transition: 300ms cubic-bezier(0.1, 0.7, 0.6, 0.9);
      transition-property: opacity, transform;
      transition-delay: #{120ms * $i + $enter-delay};
    }
  }

  .page-enter {
    transform: translateY(100%);

    .enter-#{$i} {
      opacity: 0;
    }
  }

  .page-leave-active {
    display: block;
  }
}
</style>
