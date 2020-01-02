<template>
  <div v-if="secondaryColor === false" class="loop-container">
    <button class="minus-button" @click="reduceValue"><i class="fas fa-minus"></i></button>
    <button class="loop-button" @click="handleLoop"><i class="fas fa-undo-alt"></i><span class="loop-value">{{ loopValue }}</span></button>
    <button class="plus-button" @click="increaseValue"><i class="fas fa-plus"></i></button>
  </div>
  <div v-else-if="secondaryColor === true" class="loop-container">
    <button class="minus-button secondary-color" @click="reduceValue"><i class="fas fa-minus"></i></button>
    <button class="loop-button secondary-color" @click="handleLoop"><i class="fas fa-undo-alt"></i><span class="loop-value">{{ loopValue }}</span></button>
    <button class="plus-button secondary-color" @click="increaseValue"><i class="fas fa-plus"></i></button>
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
  props: {
    secondaryColor: Boolean,
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
    border-right: solid 2px $color-primary-dark

    &.secondary-color
      background-color: $color-secondary
      border-right: solid 2px $color-secondary-dark

      &:active
        background-color: $color-secondary-dark

  .loop-button
    width: 64%

    .loop-value
      margin-left: 5px

    &.secondary-color
      background-color: $color-secondary

      &:active
        background-color: $color-secondary-dark

  .plus-button
    width: 18%
    border-left: solid 2px $color-primary-dark

    &.secondary-color
      background-color: $color-secondary
      border-left: solid 2px $color-secondary-dark

      &:active
        background-color: $color-secondary-dark
</style>