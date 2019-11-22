<template>
  <div class="row">
    <template v-for="row in dataCard">
      <div
        v-for="(field, keyCard) in row.fields"
        :key="keyCard"
        :class="getCol()"
      >
        <div class="card">
          <img class="card-img-bottom" :src="field.image" alt="Card image" />
          <div class="card-body text-center">
            <h4 class="card-title">{{ field.name }}</h4>
          </div>
        </div>
      </div>
    </template>
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
.card:hover {
  border: 5px solid #fff;
}
.card-title {
  align-items: center !important;
}
.card-img-bottom {
  width: 185px;
  height: 185px;
}
</style>
