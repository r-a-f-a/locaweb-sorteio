<template>
  <div>
    <div class="container">
      <div class="row">
          <img class="logo-corner" src="@/assets/themes/netflix/logos/logo-default.png" alt="">
      </div>
      <div class="grid">
          <div class="lw-col">
              <div class="sort-detail">
                  <p>SORTEIO <br>
                  <span class="lw-red">{{ configs.name }}</span></p>
                  <a href="#" class="btn btn-red btn-rounded">Iniciar sorteio</a>
              </div>
          </div>
          <div class="lw-col">
              <div class="card-avatar">
                  <img v-if="user.id" class="sort-avatar" :src="getImage(user.id)" alt="">
                  <img src="@/assets/themes/netflix/avatar/flash.jpg" v-else>
                  <div class="user-details bottom-left" v-if="user.id">
                    <h1>{{user.funcionario | pasedName }}</h1>
                    <p>{{user.area}}</p>
                    <p>{{user.email}}</p>
                  </div>
              </div>
          </div>
          <div class="lw-col">
            <div class="sort-message">
              <timer></timer>
            </div>
          </div>
      </div>
    </div>
    <roulette v-if="collaborators.length" :collaborators="collaborators"></roulette>
  </div>
</template>

<script>
import roulette from './roulette'
import timer from './timer'
export default {
  name: 'sorteio',
  data () {
    return {
      collaborators: [],
      configs: [],
      user: {
      }
    }
  },
  components: {
    roulette,
    timer
  },
  filters: {
    pasedName: function (value) {
      const fullName = value.split(' ')
      return fullName[0] + ' ' + fullName[fullName.length - 1]
    }
  },
  methods: {
    getImage (index) {
      // const index = Math.floor(Math.random(0, 10) * 10)
      try {
        const image = require(`@/assets/themes/netflix/povofeio/${index}.jpg`) || null
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
    var body = document.querySelector('body')
    body.classList.add('sorteio')
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

</style>
