<template>
  <div class="play-container">
    <button 
          class="play-button"
          @click="handleClick"
    ><i class="fas fa-play"></i></button>
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

.play-container
  display: flex
  width: 20%

  .play-button
    width: 100%
    border-radius: 2px
    overflow: hidden
</style>