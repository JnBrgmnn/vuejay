<template>
  <input 
      v-if="secondaryColor === false"
      type="range" 
      value="50" 
      class="slider" 
      @input="handleInput"/>
  <input 
      v-else-if="secondaryColor === true"
      type="range" 
      value="50" 
      class="slider secondary-color" 
      @input="handleInput"/>
</template>

<script>
export default {
  name: 'Slider',
  methods: {
    handleInput(event) {
      this.$emit('sliderInput', event.target.value)
    }
  },
  props: {
    secondaryColor: Boolean,
  }
}
</script>

<style lang="sass" scoped>
@import '../assets/sass/variables'

.slider
  -webkit-appearance: none
  width: 100%
  height: 35px
  background-color: $color-primary-light

  &.secondary-color
    background-color: $color-secondary-light

    &::-webkit-slider-thumb
      background-color: $color-secondary

  &:focus
    outline: none

  &::-webkit-slider-thumb
    background-color: $color-primary
    -webkit-appearance: none
    height: 37px
    width: 37px
</style>