<template>
  <input 
      v-if="secondaryColor === false"
      type="range" 
      value="50" 
      class="slider" 
      v-model="value"/>
  <input 
      v-else-if="secondaryColor === true"
      type="range" 
      value="50" 
      class="slider secondary-color" 
      v-model="value"/>
</template>

<script>
export default {
  name: 'Slider',
  data() {
    return {
      value: Number,
    }
  },
  props: {
    secondaryColor: Boolean,
    midiCrossfade: Number
  },
  watch: {
    value: function() {
      this.$emit('sliderInput', this.value)
    },
    midiCrossfade: function(newValue) {
      this.value = newValue
    }
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