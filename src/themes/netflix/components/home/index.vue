<template>
  <div class="container-center">
    <div class="content-center">
      <div class="arrow"></div>
      <img class="logo-party-home" src="../../assets/logos/Logo-Locapower-Home.png" alt="">
      <span class="logo-span">SORTEIO</span>
      <router-link class="btn btn-home btn-red btn-rounded" tag="a" to="/list">INICIAR</router-link>
      <img class="logo-home" src="../../assets/logos/locaweb.svg" alt="">
    </div>
  </div>
</template>
<script>
export default {
  name: 'home',
  methods: {
    goToList () {
      this.$router.push('/list')
    }
  },
  created () {
    this.$events.on('button-pressed-enter', () => {
      this.goToList()
    })
  }
}
</script>
