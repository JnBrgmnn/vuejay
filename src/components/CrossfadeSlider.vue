<template>
  <input type="range" class="crossfade-slider">
</template>

<script>
export default {

}
</script>

<style lang="sass" scoped>
@import '../assets/sass/variables'

.crossfade-slider
  -webkit-appearance: none
  width: 250px
  height: 35px
  background-color: $color-primary-light

  &:focus
    outline: none

  &::-webkit-slider-thumb
    background-color: $color-primary
    -webkit-appearance: none
    height: 35px
    width: 35px
</style>