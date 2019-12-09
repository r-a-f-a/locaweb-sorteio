<template>
<div class='awards'>
    <div class="container">
        <div class="row">
            <img class="logo-corner" src="../../../assets/logos/logo-default.png" alt="">
        </div>
        <div class="grid">
            <div class="lw-col">
                <winner :user="user"></winner>
            </div>
            <div class="lw-col">
                <sort :configs="configs"></sort>
            </div>
        </div>
    </div>
</div>

</template>

<script>
import winner from './winner'
import sort from './sort'
export default {
  metaInfo: {
  // Children can override the title.
    bodyAttrs: {
      class: ['awards']
    }
  },
  name: 'awards',
  props: ['configs', 'collaborators', 'user'],
  components: {
    winner,
    sort
  }
}
</script>

<style scoped>
.awards {
  height: 100vh;
  background-image: url("../../../assets/bg/Background-Tela-5-opacity.jpg");

}
.lw-col {
  width: auto!important;
}
</style>
