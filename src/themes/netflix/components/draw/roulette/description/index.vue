<template>
  <div class="detail description">
    <p>
      Sorteio
      <span class="lw-red">{{ configs.title }}</span>
    </p>
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

<style scoped>
.description {
  width: 100%;
  position: fixed;
  left: 0;
  text-align: center;
}
.detail {
  top: 0!important;
  margin-top: -55px!important;
}
</style>
