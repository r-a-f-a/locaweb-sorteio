<template>
  <div id="app" :style="appStyles">
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'LOCAWEB-SORTEIO',
  data () {
    return {
      style: `./components/themes/${process.env.VUE_APP_THEME}/styles.css`
    }
  },
  computed: {
    appStyles () {
      return {
        '--style': this.style,
        $importStyle: this.style
      }
    }
  },
  created () {
    this.$api.get('/geral').then(data => {
      console.log('RESULT USERS', data)
    })
    this.$api.get('/picker/geral').then(data => {
      console.log('RESULT API GERAL', data)
    })
  }
}
</script>
<style>
/* body {
  background: #233344 !important;
  color: #fff !important;
  font-family: 'LwFont', sans-serif
} */
body{
  padding: 0;
  margin: 0;
  color: #fff !important;
  background-image: url("./assets/themes/netflix/bg/1.jpg");
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  font-family: 'LwFont', sans-serif
}
body.sorteios{
  background-image: url("./assets/themes/netflix/bg/2.jpg");
}
body.sorteio{
  background-image: url("./assets/themes/netflix/bg/3.jpg");
}
@font-face {
  font-family: 'LwFont';
  src:  url('./assets/themes/netflix/fonts/bebas.ttf');
}
a, p, span, b, h1, h2, h3{
  text-decoration: none !important;
}
li {
  display: list-item;
  text-align: -webkit-match-parent;
}
.container-center{
  width: 20%;
  max-width: 100%;
  height: auto;
  display: flex;
  margin: 0 auto;
}
.content-center{
  width: 100%;
  padding: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
}
.logo-home{
  width: 50%;
  height: auto;
  margin: 90px auto;
}
.logo-span{
  font-size: 92pt;
  margin-top: -20px;
  padding-bottom: 70px;
}
.btn {
  display: inline-block;
  font-weight: 400;
  color: #fff;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 10px 20px;
  font-size: 16pt;
  line-height: 1.5;
  border-radius: .25rem;
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}
.btn-red{
  background-color: #f00943;
}
.btn-red:hover{
  color: #f00943 !important;
  background-color: #fff;
}
.btn-rounded{
  border-radius: 50px;
}
.logo-party-home{
  width: 80%;
  height: auto;
  margin: 70px auto;
}
.container{
  width: 90%;
  max-width: 100%;
  height: auto;
  margin: 0 auto;
}
.row{
  width: 100%;
  padding: 20px;
}
.logo-corner{
  width: 150px;
  height: auto;
  margin-top: 30px;
}
.sort-content{
  width: 50%;
  margin: 90px auto;
  text-align: center;
  display: flex;
  flex-direction: column;
}
.sort-content-title{
  font-weight: 500;
  font-size: 36pt;
}
.lw-red{
  color: #f00943;
}
.cards{
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  text-align: center;
}
.cards>* {
  flex: 1 1 100px;
}
.card{
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: all 0.3s;
}
.card-img{
  width: 150px;
  height: 150px;
  border-radius: 5px;
  background-color: #fff;
  display: inline-block;
  position: relative;
}
.card-img img {
  max-height: 100%;
  max-width: 100%;
  width: auto;
  height: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  transition: all 0.3s;
}
.card-img:hover{
  background-color: #f00943;
}
.card-title{
  color: #fff;
  font-size: 18pt;
  text-decoration: none !important;
}
.grid{
  display: flex;
  justify-content: space-between;
}
.lw-col{
  width: 20%;
  display: inline-flex;
}
.m-20{
  margin-top: -30px;
}
.sort-detail{
  margin-left: 20px;
  display: flex;
  flex-direction: column;
}
.start-sort{
  margin-top: 30px;
}
.card-avatar{
  margin: 0 auto;
}
.card-avatar img{
  width: 350px;
  height: auto;
}
.roulet-section{
  margin-top: 120px;
}
.roulet {
  display: -ms-flexbox;
  display: flex;
  padding-left: 0;
  list-style: none;
  border-radius: .25rem;
}
.roulet-item:first-child .roulet-card {
  margin-left: 0;
  border-top-left-radius: .25rem;
  border-bottom-left-radius: .25rem;
}
.roulet-item:not(:first-child){
  margin-left: 10px;
}
.roulet-item {
  position: relative;
  display: block;
  margin-left: -1px;
  line-height: 1.25;
  border-radius: 5px;
}

.active img{
  margin-top: -15px !important;
  width: 280px !important;
  height: 200px !important;
}

.roulet-item img{
  width: 250px;
  height: 160px;
  margin-top: 15px;
}
</style>
