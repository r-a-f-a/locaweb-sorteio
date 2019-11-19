<template>
  <div class="describe">
    <div class="row">
      <div class="col-md-6">
        <p>{{ data.data.geral }}</p>
      </div>
      <div class="col-md-6">
        <p>Teste</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Describe",
  data() {
    return {
      data: ""
    };
  },
  methods: {
    getData() {
      axios.get("/picker").then(res => {
        this.data = res;
      });
    }
  },
  created() {
    this.getData();
  }
};
</script>

<style></style>
