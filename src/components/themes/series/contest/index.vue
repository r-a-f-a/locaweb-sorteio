<template>
  <div id="constest">
    <!-- <describe :configs="configs"></describe> -->
    <!-- <Sort v-if="collaborators.length" :collaborators="collaborators"></Sort> -->
    <awards :configs="configs"></awards>
  </div>
</template>

<script>
// import describe from './components/describe'
// import Sort from './components/sort'
import awards from './components/awards'
export default {
  name: 'constest',
  components: {
    // Sort,
    // describe,
    awards
  },
  data () {
    return {
      collaborators: [],
      configs: []
    }
  },
  methods: {
    getCollaborators () {
      this.$api.get(`/${this.type}`)
        .then(res => {
          this.collaborators = res.data
        })
    },
    getConfigs () {
      this.$api.get(`/picker/${this.type}`)
        .then(res => {
          this.configs = res.data
        })
    }

  },
  computed: {
    type () {
      return this.$route.params.type
    }
  },
  mounted () {
    this.getCollaborators()
    this.getConfigs()
  }
}
</script>

<style scoped></style>
