<template>
<div class='awards'>
  <h1> PREMIACAO</h1>
  {{configs}}
  {{user}}
</div>

</template>

<script>
export default {
  metaInfo: {
  // Children can override the title.
    bodyAttrs: {
      class: ['awards']
    }
  },
  name: 'awards',
  props: ['configs', 'collaborators', 'user']
}
</script>

<style>

</style>
