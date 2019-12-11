<template>
  <div class="roullete">
      <div class='container'>
      <div class="row">
          <img class="logo-corner" src="../../../assets/logos/logo-default.png" alt="">
      </div>
        <div class="grid">
          <div class="lw-col">
            <employee :user="user"></employee>
          </div>
          <div class="lw-col">
              <description :configs='configs'></description>
              <cardAvatar :user="user"></cardAvatar>
          </div>
          <div class="lw-col">
            <div class="sort-message">
              <regressive v-if="showRegressive"></regressive>
            </div>
          </div>
      </div>
      </div>
    <sort  v-if="collaborators.length"  :collaborators="collaborators"></sort>
  </div>
</template>

<script>
import sort from './sort'
import employee from './employee'
import cardAvatar from './card'
import description from './description'
import regressive from './regressive'
export default {
  metaInfo: {
    bodyAttrs: {
      class: ['sorteio roullete']
    }
  },
  name: 'Roullete',
  props: ['configs', 'collaborators', 'user'],
  components: {
    sort,
    employee,
    cardAvatar,
    description,
    regressive
  },
  data () {
    return {
      showRegressive: false
    }
  },
  created () {

  },
  mounted () {
    this.$events.on('roulette-showRegressive', (val) => {
      this.showRegressive = val
    })
  }
}
</script>

<style lang="scss" scoped>
.grid {
  margin-top: 75px!important;
}
.sort {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 250px;
  margin: 20px 0;
}

.sort-box {
  height: 100%;
  border: 1px solid white;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
}
.arrow:before {
  content: "";
  position: absolute;
  z-index:1034!important;
  border-left: 45px solid transparent;
  border-right: 45px solid transparent;
  border-top: 50px solid #f00943;
  margin-left: 94px!important;
  margin-top: -55px!important;

}

.sort-line {
  position: absolute;
  left: 5px;
  width: max-content;
}

.sort-item {
  display: inline-flex;
  width: 250px;
  height: 250px;
  margin: 0 5px;
  border: 1px solid green;
}
.sort-item img {
  width: 100%;
}
.sort-item b{
  background-color: #fff;
  color: #000;
  width: 100%;
  height: 60px;
  text-align: center;
  font-weight: bold;
}
.ani-running-enter-active,
.ani-running-enter-to
{
  animation-name: running;
  animation-duration: 10s;
  animation-delay: 1000ms;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;
}

@keyframes running {
    from {left: -5px;}
    to {left: var(--left);}
}

.roulet-item span {
  border: 1px solid black;
  position: absolute;
  top: 100px;
  z-index: 999;
  left: 110px;
  color: #000;
  background-color:#fff;
  z-index: 1036 !important;
}
</style>
