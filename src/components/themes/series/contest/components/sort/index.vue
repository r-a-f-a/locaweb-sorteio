<template>
  <div id="sort">
  </div>
</template>

<script>
var shuffle = require('shuffle-array')
export default {
  name: 'sort',
  props: ['collaborators'],
  data () {
    return {
      choosedIndex: 0,
      sliced: []
    }
  },
  methods: {
    setSliced () {
      this.sliced = shuffle.pick(this.collaborators, { picks: 100 })
    },
    setChoosed () {
      this.choosedIndex = Math.floor((Math.random() * this.sliced.length))
    },
    changeIndexChoosed () {
      var choosed = this.sliced[this.choosedIndex]
      var removed = this.sliced[97]
      this.sliced[97] = choosed
      this.sliced[this.choosedIndex] = removed
    }
  },
  mounted () {
    this.setSliced()
    this.setChoosed()
    this.changeIndexChoosed()
  }
}
</script>

<style scoped>
</style>
