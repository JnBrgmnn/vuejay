<template>
  <input 
      v-if="secondaryColor === false" 
      type="range" 
      value="50"
      class="volume-slider"
      v-model="volume">
    <input 
      v-else-if="secondaryColor === true" 
      type="range" 
      value="50"
      class="volume-slider secondary-color"
      v-model="volume">
</template>

<script>
export default {
  name: 'VolumeSlider',
  data() {
    return {
      volume: Number
    } 
  },
  props: {
    secondaryColor: Boolean,
    midiVolume: Number,
  },
  watch: {
    volume: function() {
      this.$emit('volumeInput', this.volume)
    },
    midiVolume: function(newValue) {
      this.volume = newValue * 100
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

  &.secondary-color
    background-color: $color-primary-light

    &::-webkit-slider-thumb
      background-color: $color-secondary

  &:focus
    outline: none

  &::-webkit-slider-thumb
    -webkit-appearance: none
    height: 35px
    width: 35px
    background-color: $color-primary
</style>