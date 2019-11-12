<template>
  <h1 :style="cssProps">{{ title }}</h1>
</template>
<script>
export default {
  name: 'ColorHeader',
  props: {
    bgColor: { type: String, default: 'inherit', required: false },
    bgHover: { type: String, default: 'inherit', required: false },
    title: { type: String, default: '(Untitled)', required: false }
  },
  computed: {
    cssProps () {
      return {
        '--bg-color': this.bgColor,
        '--bg-hover': '#555',
        'border': '10px solid black',
        'width': '400px'
      }
    }
  }
}
</script>
<style>
  h1 { background-color: var(--bg-color); }
  h1:hover { background-color: var(--bg-hover); }
</style>
