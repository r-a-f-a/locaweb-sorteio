<template>
  <div class="row">
    <template v-for="(row, index) in dataCard">
      <div :key="index" :class="getCol()">
        <div class="card">
          <img class="card-img-bottom" :src="row.image" alt="Card image" />
          <div class="card-body">
            <h4 class="card-title">{{ row.name }}</h4>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "Card-sort",
  props: ["dataCard"],
  methods: {
    getCol() {
      return "col-md-" + Math.abs(Math.ceil(12 / this.dataCard.length));
    }
  }
};
</script>

<style scoped>
.card {
  background-color: transparent;
}
.card-title {
  text-align: center !important;
}
.card-img-bottom {
  width: 185px;
  height: 185px;
}
</style>
