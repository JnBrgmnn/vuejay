<template>
  <input 
      type="range" 
      value="0" 
      class="slider" 
      @input="handleInput"/>
</template>

<script>
export default {
  name: 'Slider',
  methods: {
    handleInput(event) {
      this.$emit('sliderInput', event.target.value)
    }
  }
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