<template>
  <div class="describe">
    <div class="row">
      <div class="col-md-6">
        <textTitle :configs="configs"></textTitle>
      </div>
      <div class="col-md-6">
        <cardImage :configs="configs"></cardImage>
      </div>
    </div>
  </div>
</template>

<script>
import textTitle from './components/text'
import cardImage from './components/image'

export default {
  name: 'Describe',
  props: ['configs'],
  components: {
    textTitle,
    cardImage
  },
  data () {
    return {
      data: ''
    }
  }
}
</script>

<style>
.margin{
  margin: 20px;
}
</style>
