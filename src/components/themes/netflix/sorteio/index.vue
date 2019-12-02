<template>
  <div class="container">
    <div class="row">
        <img class="logo-corner" src="@/assets/themes/netflix/logos/logo-default.png" alt="">
    </div>
    <div class="grid">
        <div class="lw-col">
            <div class="sort-detail">
                <p class="sort-content-title">SORTEIO <br>
                    <span class="lw-red">PRATAS DA CASA</span>
                </p>
                <p class="m-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in est a orci pretium faucibus id a elit. Pellentesque id dictum tellus. </p>
                <a href="#" class="btn btn-red btn-rounded start-sort">INICIAR SORTEIO</a>
            </div>
        </div>
        <div class="lw-col">
            <div class="card-avatar">
                <img class="sort-avatar" src="@/assets/themes/netflix/avatar/flash.jpg" alt="">
            </div>
        </div>
        <div class="lw-col">
        </div>
    </div>
    <div class="row">

    </div>
  </div>
</template>

<script>
export default {
  name: 'sorteio',
  created () {
    var body = document.querySelector('body')
    body.classList.add('sorteio')
  }
}
</script>

<style>

</style>
