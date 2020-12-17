<template>
  <div class="award">
    <img class="product" :src="getImage(award.image)" />
    <span class="name">{{award.name}}</span>
  </div>
</template>

<script>
export default {
 name: "Awards",
 props:["configs", "user", "award"],
 created(){

 },
 methods:{
    getImage (name) {
      try {
        const image = require(`../../../../assets/premios/${name}`) || null
        return image
      } catch (error) {
        return null
      }
    }
 }
}
</script>

<style>
.award{
  border: 1px solid #fff;
  width: 280px;
  height: 280px;
  background: #fff;
  border-radius: 10px;
  position: relative;
}
.award .product{
  width: 100%;
  height: 100%;
  border-radius: 10px;
  position: absolute;
}
.award .name{
  background: #f00943;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  height: 50px;
  display: block;
  position: absolute;
  bottom: -20px;
  width: calc(100% + 2px);
  left: -1px;
  text-align: center;
  vertical-align: middle;
  z-index: 9999;
  padding-top: 15px;
}
</style>