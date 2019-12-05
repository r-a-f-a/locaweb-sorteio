<template>
  <div class="sort">
      <div class="cards">
        <div class="card-sort" v-for="(i, index) in 9" :key="index">
            <img v-if="selected2 == i" :src="getImage(i, 'On')">
            <img v-else :src="getImage(i, 'Off')">
        </div>

      </div>
  </div>
</template>

<script>
export default {
  name: 'sort',
  props: ['configs'],
  data () {
    return {
      selected: 2
    }
  },
  methods: {
    getImage (index, type) {
      return require(`../../../../assets/icons/Botao${index}-premio-${type}.png`)
    }
  },
  mounted () {
    var _this = this
    setInterval(function () {
      _this.selected++
    }, 500)
  },
  computed: {
    selected2: function () {
      return this.selected
    }
  }
}
</script>

<style scoped>
.sort {
  display: flex!important;
  max-width: 100%;
}
.cards {
    max-width: 510px;
}
.card-sort {
  margin: 10px;
}
</style>
