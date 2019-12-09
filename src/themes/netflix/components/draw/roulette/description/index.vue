<template>
  <div class="sort-detail">
      <p>{{ configs.title | parseTitle }}</p>
      <a href="#" class="btn btn-red btn-rounded">Iniciar sorteio</a>
  </div>
</template>

<script>
export default {
  name: 'description',
  props: ['configs'],
  filters: {
    parseTitle () {
      return this.configs.title.split('\n')
    }
  }
}
</script>

<style>

</style>
