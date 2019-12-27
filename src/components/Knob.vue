<template>
  <div class="knob"><span>{{ text }}</span></div>
</template>

<script>
export default {
  name: 'Knob',
  props: {
    text: String,
  }
}
</script>

<style lang="sass" scoped>
.knob 
  width: 50px
  text-align: center
</style>