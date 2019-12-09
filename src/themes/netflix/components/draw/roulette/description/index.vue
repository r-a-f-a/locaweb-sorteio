<template>
  <div class="detail">
      <p>
        Sorteio<br>
        <span class="lw-red">{{ configs.title }}</span>
      </p>
      <a href="#" class="btn btn-red btn-rounded">Iniciar Sorteio</a>
  </div>
</template>

<script>
export default {
  name: 'description',
  props: ['configs'],
  data () {
    return {
      have_winner: false
    }
  },
  filters: {
    parseTitle () {
      return this.configs.title.split('\n')
    }
  },
  created () {
    this.$events.on('sort-finished', () => {
      this.have_winner = true
    })
  },
  computed: {
    btnText () {
      if (this.have_winner) {
        return 'Iniciar Sorteio'
      }
      return 'Reiniciar Sorteio'
    }
  }
}
</script>

<style>

</style>
