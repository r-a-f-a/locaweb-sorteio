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
/* .grid-container {
  display: -webkit-flex;
  -webkit-flex-direction: row;
  display: flex;
  flex-direction: row;
}
.grid-container > div {
  padding: 20px 0px;
  font-size: 30px;
  width: 33%;
}
.sort-detail{
  font-weight: 400;
}
.sort-detail p{
  margin-top: -20px;
  font-size: 14pt;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.sort-avatar-card{
  margin-left: 300px;
}
.sort-avatar{
  width: 350px;
  height: auto;
  box-shadow: 1px 11px 16px 0px rgba(0,0,0,0.24);
}
.start-sort{
  width: 100% !important;
} */
</style>
