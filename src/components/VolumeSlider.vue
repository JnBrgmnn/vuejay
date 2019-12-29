<template>
  <input 
      type="range" 
      class="volume-slider"
      @input="handleInput">
</template>

<script>
export default {
  name: 'VolumeSlider',
  methods: {
    handleInput(event) {
      this.$emit('volumeInput', event.target.value)
    }
  }
}
</script>

<style lang="sass" scoped>
@import '../assets/sass/variables'
.volume-slider
  -webkit-appearance: none
  align-self: center
  transform: rotateZ(-90deg)
  min-width: 250px
  min-height: 35px
  background-color: $color-primary-light

  &:focus
    outline: none

  &::-webkit-slider-thumb
    -webkit-appearance: none
    height: 35px
    width: 35px
    background-color: $color-primary
</style>