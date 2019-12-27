<template>
  <div id="app">
    <h1 class="heading">
      <span>Dee</span>
      <span>Jay</span>
    </h1>
    <Mixer />
    <MusicList />
  </div>
</template>

<script>
import Mixer from './views/Mixer'
import MusicList from './views/MusicList'

export default {
  name: 'app',
  components: {
    Mixer,
    MusicList
  }
}
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,600,700&display=swap')
@import 'assets/sass/variables'

*
  margin: 0
  padding: 0

body
  background-color: $background-color
  color: $font-color
  font-family: "Montserrat", sans-serif
  cursor: default

  ::-webkit-scrollbar
    width: 10px

  ::-webkit-scrollbar-track 
    background: $color-secondary-light
    border-radius: 5px

  ::-webkit-scrollbar-thumb
    border-radius: 5px
    background: $color-secondary

    &:active
      background: $color-secondary-dark

#app
  height: 100vh

.heading
  padding: 10px
  text-align: center
  font-size: 58px

  span:first-child
    color: $color-primary

  span:nth-child(2)
    color: $color-secondary
</style>
