<template>
  <div id="app">
    <h1 id="heading">
      <span>Dee</span>
      <span>Jay</span>
    </h1>
    <Mixer id="mixer"
        :songTrackOne="songTrackOne"
        :songTrackTwo="songTrackTwo"/>
    <MusicList id="music-list"
        @songTrackOne="setSongTrackOne"
        @songTrackTwo="setSongTrackTwo"/>
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
  },
  data() {
    return {
      songTrackOne: null,
      songTrackTwo: null,
    }
  },
  methods: {
    setSongTrackOne(song) {
      this.songTrackOne = song
    },
    setSongTrackTwo(song) {
      this.songTrackTwo = song
    }
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

#heading
  padding: 10px
  text-align: center
  font-size: 58px
  height: 8%

  span:first-child
    color: $color-primary

  span:nth-child(2)
    color: $color-secondary

#mixer
  height: 40%
</style>
