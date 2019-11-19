<template>
  <div id="constest">
    <describe></describe>
    <sort></sort>
  </div>
</template>

<script>
import describe from './components/describe'
import sort from './components/sort'
export default {
  name: 'constest',
  components: {
    sort,
    describe
  },
  data () {
    return {}
  }
}
</script>

<style scoped></style>
