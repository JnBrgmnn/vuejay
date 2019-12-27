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
@import 'assets/sass/main'

.heading
  padding: 10px
  text-align: center
  font-size: 48px

  span:first-child
      color: $color-primary

  span:nth-child(2)
      color: $color-secondary
</style>
