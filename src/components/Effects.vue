<template>
  <div class="effects-container">
    <button class="effect-button" @click="handleEffect">{{ activeEffect }}</button>
    <button class="dropdown-button" @click="toggleDropdown"><i class="fas fa-caret-down"></i></button>
    <div class="dropdown-menu" v-show="isVisible">
      <div class="dropdown">
        <button class="effect" @click="setEffect(effects[0])">{{ effects[0] }}</button>
        <button class="effect" @click="setEffect(effects[1])">{{ effects[1] }}</button>
        <button class="effect" @click="setEffect(effects[2])">{{ effects[2] }}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Effects',
  data() {
    return {
      isVisible: false,
      isActive: false,
      effects: ['Bitcrusher', 'Reverb', 'Delay'],
      activeEffect: 'Bitcrusher'
    }
  },
  methods: {
    handleEffect() {
      this.$emit('effect', this.activeEffect)
    },
    toggleDropdown() {
      this.isVisible = !this.isVisible
    },
    setEffect(effect) {
      this.activeEffect = effect
    }
  }
}
</script>

<style lang="sass" scoped>
@import '../assets/sass/button'
@import '../assets/sass/variables'

.effects-container
  display: flex
  width: 35%
  border-radius: 2px
  overflow: hidden
  flex-wrap: wrap

  .effect-button
    width: 85%

  .dropdown-button
    width: 15%

  .dropdown-menu
    position: absolute
    display: flex
    justify-content: center
    align-items: center
    top: 40.5%
    width: 400px
    height: 50px
    background-color: $color-primary-light
    border-bottom-left-radius: 10px
    border-bottom-right-radius: 10px
    z-index: 10

    .dropdown
      display: flex
      height: 90%
      width: 95%
      flex-wrap: wrap
      justify-content: space-around
      align-items: center

      .effect
        background-color: $color-primary-dark
        display: flex
        justify-content: center
        align-items: center
        width: 30%
        height: 35px
        border-radius: 5px

        &:hover
          background-color: $color-primary
          cursor: default
</style>