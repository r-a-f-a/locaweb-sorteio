<template>
  <div class="employee">
    <div class="user-details" v-if="user.id">
        <!-- <h1>{{user.funcionario | pasedName }}</h1>
        <p>{{user.area}}</p>
        <p>{{user.email}}</p> -->
        <div class="detail">
            <h2 class="lw-red">{{ user.funcionario | pasedName }}</h2>
            <p>
            {{ user.area }} <br/>
            {{ user.email}}
            </p>
        </div>
    </div>
    <div class="user-details" v-else>
      <div class="detail">
        <h2 class="lw-red">SORTEIO PRATAS DA CASA</h2>
        <p class="text-center">
        Deste sorteio participam todos aqueles que foram nomeados pratas da casa neste ano
        </p>
      </div>
      <button class="btn btn-home btn-red btn-rounded"> SORTEAR</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'employee',
  props: ['user'],
  filters: {
    pasedName: function (value) {
      const fullName = value.split(' ')
      return fullName[0] + ' ' + fullName[fullName.length - 1]
    }
  }
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

.btn{
  line-height: 1.0!important;
}
</style>
