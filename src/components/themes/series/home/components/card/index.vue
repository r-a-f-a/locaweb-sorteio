<template>
  <div class="row">
    <div v-for="(row, index) in dataCard" :key="index" class="col-md-3">
      <div class="card">
        <img :src="row.image" alt="Card image" />
        <div class="card-body">
          <h4 class="card-title">
            <router-link :to="`sort/${row.id}`" tag="a">{{ row.name }}</router-link>
          </h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card-sort',
  props: ['dataCard'],
  methods: {
    getCol () {
      return 'col-md-' + Math.abs(Math.ceil(12 / this.dataCard.length))
    }
  }
}
</script>

<style scoped>
.card {
  background-color: transparent;
}
.card img {
  width: 100%;
  height: auto;
}
.card-title {
  text-align: center;
}
.card-title a {
  color: #fff;
  text-decoration: none;
}
</style>
