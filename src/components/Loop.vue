<template>
  <div class="loop-container">
    <button class="minus-button"><i class="fas fa-minus"></i></button>
    <button class="loop-button"><i class="fas fa-undo-alt"></i><span></span></button>
    <button class="plus-button"><i class="fas fa-plus"></i></button>
  </div>
</template>

<script>
export default {
  name: 'Loop'
}
</script>

<style lang="sass" scoped>
@import '../assets/sass/button'

.loop-container
  display: flex
  width: 30%
  border-radius: 2px
  overflow: hidden

  .minus-button
    width: 18%
  .loop-button
      width: 64%
  .plus-button
      width: 18%
</style>