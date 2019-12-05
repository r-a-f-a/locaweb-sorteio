<template>
  <div class="sort-detail">
      <p>SORTEIO <br>
      <span class="lw-red">{{ configs.name }}</span></p>
      <a href="#" class="btn btn-red btn-rounded">Iniciar sorteio</a>
  </div>
</template>

<script>
export default {
  name: 'description',
  props: ['configs']
}
</script>

<style>

</style>
