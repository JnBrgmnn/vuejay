<template>
  <div class="play-container">
    <button 
        v-if="secondaryColor === false"
        class="play-button"
        @click="handleClick">
      <i v-if="isActive === false" class="fas fa-play"></i>
      <i v-else-if="isActive === true" class="fas fa-pause"></i>
    </button>
    <button v-else-if="secondaryColor === true"
        class="play-button secondary-color"
        @click="handleClick">
      <i v-if="isActive === false" class="fas fa-play"></i>
      <i v-else-if="isActive === true" class="fas fa-pause"></i>
    </button>
  </div>
</template>

<script>
export default {
  name: 'Play',
  data() {
    return {
      isActive: false
    }
  },
  props: {
    secondaryColor: Boolean,
  },
  methods: {
    handleClick() {
      this.isActive = !this.isActive
      this.$emit('play', this.isActive)
    }
  }
}
</script>

<style lang="sass" scoped>
@import '../assets/sass/button'
@import '../assets/sass/variables'

.play-container
  display: flex
  width: 20%

  .play-button
    width: 100%
    border-radius: 2px
    overflow: hidden

    &.secondary-color
      background-color: $color-secondary

      &:active
        background-color: $color-secondary-dark
</style>