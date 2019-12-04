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
.text-center{
  text-align: center !important;
}
.lw-red{
  color: #f00943;
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
  margin-left: -20px;
}
.sort-content{
  width: 50%;
  margin: 90px auto;
  text-align: center;
  display: flex;
  flex-direction: column;
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
.sort-detail{
  display: flex;
  flex-direction: column;
  align-content: center;
}
.sort-detail p{
  font-size: 48pt;
}
.sort-message{
  display: flex;
  align-content: center;
}
.sort-message p{
  font-size: 48pt;
}
.m-20{
  margin-top: -30px;
}
.card-avatar{
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 350px;
  height: 450px;
  position: relative;
  overflow: hidden;
}
.card-avatar img{
  width: 100%;
  height: 100%;
  top: -100px;
  border-radius: 6px;
  object-fit: cover !important;
}
.user-details{
  width: 100%;
  height: auto;
  bottom: 0 !important;
  left: 0 !important;
  /* background-color: rgba(240, 9, 67, 0.8); */
  background-image: linear-gradient(transparent, #242323);
}
.user-details h1{
  margin-bottom: -10px;
}
.user-details h1, p{
  text-shadow: 1px 1px #000;
}
.bottom-left {
  position: absolute;
  bottom: 20px;
  padding-left: 16px;
}
.avatar-name{
  font-size: 24pt !important;
}
.roulet-section{
  margin-top: 120px;
  width: 100%;
}
.roulet {
  display: -ms-flexbox;
  display: flex;
  padding-left: 0;
  list-style: none;
  border-radius: .25rem;
  width: 100%;
}
.roulet-item:first-child .roulet-card {
  margin-left: 0;
  border-top-left-radius: .25rem;
  border-bottom-left-radius: .25rem;
}
.roulet-item:not(:first-child){
  margin-left: 10px;
}
.roulet-item{
  position: relative;
  display: block;
  margin-left: -1px;
  line-height: 1.25;
  width: calc(100%/7) !important;
  height: auto;
}
.roulet-item .active{
  z-index: 999 !important;
  transform: scale(1.3,1.3);
  position: absolute !important;
  border: 5px solid #fff;
}

.roulet-item img{
  width: 100%;
  height: 100%;
  border-radius: 5px;
  object-fit: cover !important;
}
.roulet-span{
  z-index: 1 !important;
}
</style>
