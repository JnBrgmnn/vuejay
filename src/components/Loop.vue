<template>
  <div class="loop-container">
    <button class="minus-button" @click="reduceValue"><i class="fas fa-minus"></i></button>
    <button class="loop-button" @click="handleLoop"><i class="fas fa-undo-alt"></i>{{ loopValue }}<span></span></button>
    <button class="plus-button" @click="increaseValue"><i class="fas fa-plus"></i></button>
  </div>
</template>

<script>
export default {
  name: 'Loop',
  data() {
    return {
      loopValue: 4,
      isActive: false
    }
  },
  methods: {
    reduceValue() {
      if(this.loopValue > 1) {
        this.loopValue = this.loopValue / 2
      }
    },
    increaseValue() {
      if(this.loopValue < 16) {
        this.loopValue = this.loopValue * 2
      }
    },
    handleLoop() {
      this.isActive = !this.isActive

      this.$emit('loop', this.loopValue, this.isActive)
    }
  }
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