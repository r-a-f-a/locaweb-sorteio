<template>
  <div id="constest">
    <describe :configs="configs"></describe>
    <sort :collaborators="collaborators"></sort>
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
    return {
      collaborators: [],
      configs: [],
      type: ''
    }
  },
  methods: {
    setType () {
      this.type = this.$route.params.type
    },
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
  mounted () {
    this.getCollaborators()
    this.getConfigs()
  },
  created () {
    this.setType()
  }
}
</script>

<style scoped></style>
