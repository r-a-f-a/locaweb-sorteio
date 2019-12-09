<template>
  <div class="winner">
    <div class="detail">
        <h2 class="lw-red">{{ user.funcionario }}</h2>
        <p>
          {{ user.area }} <br/>
          {{ user.email}}
        </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'winner',
  props: ['user']
}
</script>

<style scoped>
.detail{
  display: flex;
  flex-direction: column;
  align-content: center;
}
.detail h2 {
  font-size: 50pt;
}
.detail p{
  font-size: 32pt;
  margin-top: -5%;
}
</style>
