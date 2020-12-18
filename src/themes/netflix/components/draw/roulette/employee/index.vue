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
        <button @click="reSort()" v-if="showReSort" class="btn btn-home btn-white btn-rounded"> Voltar </button>
    </div>
    <div class="user-details" v-else>
      <div class="detail">
        <h2 class="lw-red">{{configs.title}}</h2>
        <p class="text-center">
        {{configs.describe}}
        </p>
      </div>
      <button v-if="configs.awards.length > 0" @click="initSort()" class="btn btn-home btn-red btn-rounded"> SORTEAR</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'employee',
  props: ['user','award','configs'],
  data(){
    return {
      showReSort: false
    }
  },
  created(){
    this.$events.off('show-reSort')
    this.$events.on('show-reSort', (value) => {
      this.showReSort = value
    })
  },
  filters: {
    pasedName: function (value) {
      const fullName = value.split(' ')
      return fullName[0] + ' ' + fullName[fullName.length - 1]
    }
  },
  methods: {
     reSort() {
      let payload= false
      this.$events.emit('remove-award')
      this.$router.push('/list')
      
    },
    initSort() {
      let payload= false
      this.$events.emit('roulette-showRegressive', payload)
      this.$events.emit('sort-start')
      this.$events.emit('button-pressed-enter')
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
