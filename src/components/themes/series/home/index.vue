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
      dataCard: [
        {
          image:
            'https://api.adorable.io/avatars/285/@adorable.io.png',
          router: '/geral',
          name: 'Geral'
        },
        {
          image:
            'https://api.adorable.io/avatars/285/fl@adorable.io.png',
          router: '/valeu',
          name: 'Valeu'
        },
        {
          image:
            'https://api.adorable.io/avatars/285/bob@adorable.io.png',
          router: '/pratas',
          name: 'Pratas'
        },
        {
          image:
            'https://api.adorable.io/avatars/285/joe@adorable.io.png',
          router: '/madrugada',
          name: 'Madrugada'
        }
      ]
    }
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
