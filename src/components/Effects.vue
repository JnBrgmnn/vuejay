<template>
  <div class="effects-container">
    <button class="effect-button"></button>
    <button class="dropdown-button"><i class="fas fa-caret-down"></i></button>
    <div class="dropdown-menu">
      <div class="dropdown">
        <div class="effect"></div>
        <div class="effect"></div>
        <div class="effect"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Effects'
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
    top: 49.6%
    width: 400px
    height: 50px
    background-color: $color-primary-light
    border-bottom-left-radius: 10px
    border-bottom-right-radius: 10px
    z-index: 10
    transition: opacity .1s ease-in, height .1s ease-in
    opacity: 0

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
          cursor: pointer
</style>