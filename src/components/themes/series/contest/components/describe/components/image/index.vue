<template>
  <div class="image">
    <img class="image-describe" width="430" heigth="430" :src="configs.image" alt="Pratas">
  </div>
</template>

<script>
export default {
  name: 'image',
  props: ['configs']
}
</script>

<style>

</style>
