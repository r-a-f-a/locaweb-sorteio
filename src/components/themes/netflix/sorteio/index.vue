<template>
  <div>
    <div class="container">
      <div class="row">
          <img class="logo-corner" src="@/assets/themes/netflix/logos/logo-default.png" alt="">
      </div>
      <div class="grid">
          <div class="lw-col">
              <div class="sort-detail">
                  <p class="sort-content-title">SORTEIO <br>
                      <span class="lw-red">PRATAS DA CASA</span>
                  </p>
                  <p class="m-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in est a orci pretium faucibus id a elit. Pellentesque id dictum tellus. </p>
                  <a href="#" class="btn btn-red btn-rounded start-sort">INICIAR SORTEIO</a>
              </div>
          </div>
          <div class="lw-col">
              <div class="card-avatar">
                  <img class="sort-avatar" src="@/assets/themes/netflix/avatar/flash.jpg" alt="">
              </div>
          </div>
          <div class="lw-col">
            CONTAGEM REGRESSIVA CARAIO
          </div>
      </div>
    </div>
    <Roleta v-if="collaborators.length" :collaborators="collaborators"></Roleta>
  </div>
</template>

<script>
import Roleta from './roleta'
export default {
  name: 'sorteio',
  data () {
    return {
      collaborators: [],
      configs: []
    }
  },
  components: {
    Roleta
  },
  methods: {
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
  },
  mounted () {
    this.getCollaborators()
    this.getConfigs()
  }
}
</script>

<style>

</style>
