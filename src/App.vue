<template>
  <div id="app">
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
#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  margin-top: 60px
</style>
