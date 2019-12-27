<template>
  <input type="range" value="0" class="slider" />
</template>

<script>
export default {
  name: 'Slider'
}
</script>

<style lang="sass" scoped>
@import '../assets/sass/variables'
.slider
  -webkit-appearance: none
  width: 290px
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