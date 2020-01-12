<template>
  <div v-if="secondaryColor === false" class="effects-container">
    <button v-if="isActive === false" class="effect-button" @click="handleEffect">{{ activeEffect }}</button>
    <button v-else-if="isActive === true" class="effect-button active" @click="handleEffect">{{ activeEffect }}</button>
    <button class="dropdown-button" @click="toggleDropdown"><i class="fas fa-caret-down"></i></button>
    <div class="dropdown-menu" v-show="isVisible">
      <div class="dropdown">
        <button class="effect" @click="setEffect(effects[0])">{{ effects[0] }}</button>
        <button class="effect" @click="setEffect(effects[1])">{{ effects[1] }}</button>
        <button class="effect" @click="setEffect(effects[2])">{{ effects[2] }}</button>
      </div>
    </div>
  </div>
  <div v-else-if="secondaryColor === true" class="effects-container">
    <button v-if="isActive === false" class="effect-button secondary-color" @click="handleEffect">{{ activeEffect }}</button>
    <button v-if="isActive === true" class="effect-button secondary-color active" @click="handleEffect">{{ activeEffect }}</button>
    <button class="dropdown-button secondary-color" @click="toggleDropdown"><i class="fas fa-caret-down"></i></button>
    <div class="dropdown-menu secondary-color" v-show="isVisible">
      <div class="dropdown secondary-color">
        <button class="effect secondary-color" @click="setEffect(effects[0])">{{ effects[0] }}</button>
        <button class="effect secondary-color" @click="setEffect(effects[1])">{{ effects[1] }}</button>
        <button class="effect secondary-color" @click="setEffect(effects[2])">{{ effects[2] }}</button>
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
      this.isActive = !this.isActive
      this.$emit('effect', this.isActive, this.activeEffect)
    },
    toggleDropdown() {
      this.isVisible = !this.isVisible
    },
    setEffect(effect) {
      this.activeEffect = effect
    }
  },
  props: {
    secondaryColor: Boolean,
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
    border-right: solid 2px $color-primary-dark

    &.active
      background-color: $color-primary-dark

    &.secondary-color
      background-color: $color-secondary
      border-right: solid 2px $color-secondary-dark

      &.active
        background-color: $color-secondary-dark

  .dropdown-button
    width: 15%

    &.secondary-color
      background-color: $color-secondary

  .dropdown-menu
    position: absolute
    display: flex
    justify-content: center
    align-items: center
    top: 39%
    width: 400px
    height: 50px
    background-color: $color-primary-light
    border-bottom-left-radius: 10px
    border-bottom-right-radius: 10px
    z-index: 10

    &.secondary-color
      background-color: $color-primary-light
      right: 2.6%

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

        &.secondary-color
          background-color: $color-secondary-dark

          &:hover
            background-color: $color-secondary

        &:hover
          background-color: $color-primary
          cursor: default
</style>