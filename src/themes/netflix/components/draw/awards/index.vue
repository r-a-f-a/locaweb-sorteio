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
            </div>
        </div>
    </div>
</div>

</template>

<script>
import winner from './winner'
export default {
  name: 'awards',
  props: ['configs', 'collaborators', 'user'],
  components: {
    winner
  }
}
</script>

<style>

</style>
