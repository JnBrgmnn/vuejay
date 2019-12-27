<template>
  <div class="play-container">
    <button class="play-button"><i class="fas fa-play"></i></button>
  </div>
</template>

<script>
export default {

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