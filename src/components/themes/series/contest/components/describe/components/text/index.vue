<template>
  <div class="texts-describe">
    <div class="margin">
        <h1>{{ configs.title }}</h1>
        <p>{{ configs.describe }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Text-describe',
  props: ['configs']
}
</script>

<style>

</style>
