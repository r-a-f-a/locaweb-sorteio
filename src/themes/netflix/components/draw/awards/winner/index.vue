<template>
  <div class="winner">
    <div class="detail">
        <h2 class="lw-red">Nome <br> Sobrenome</h2>
        <p>(LOCAWEB - Suporte) email@locaweb.com.br</p>
        {{ user }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'winner',
  props: ['user']
}
</script>

<style scoped>
.detail{
  display: flex;
  flex-direction: column;
  align-content: center;
}
.detail h2 {
    font-size: 50pt;
}
.detail p{
  font-size: 32pt;
}
</style>
