<template>
  <div class="container">
    <div class="content">
      <h2>Selecione o sorteio</h2>
      <CardHome :dataCard="dataCard"></CardHome>
    </div>
  </div>
</template>

<script>
import CardHome from './components/card'
export default {
  name: 'Series',
  components: {
    CardHome
  },
  data () {
    return {
      dataCard: []
    }
  },
  methods: {
    getConfigs () {
      this.$api.get('/picker')
        .then(res => {
          this.dataCard = res.data
        })
    }
  },
  created () {
    this.getConfigs()
  }
}
</script>

<style scoped>
.container{
  width: auto;
  max-width: 50%;
  height: auto;
  display: flex;
  margin: 10% auto;
}
.content{
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
}

/* .container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  flex-direction: row;
} */
</style>
