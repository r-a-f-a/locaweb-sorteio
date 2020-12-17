<template>
  <div class='award'>
    <img :src="getImage(award.image)" />
    <span>{{award.name}}</span>
  </div>
</template>

<script>
export default {
 name: "awards",
 props:['configs', 'user', 'award'],
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
  width: 250px;
  height: 250px;
  background: #fff;
}
.award img{
  width: 100%;
  height: 100%;
}
</style>