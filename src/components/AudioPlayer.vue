<template>
  <div class="audio-player">
    <TrackInfo />
    <WaveForm />
    <div class="effect-sliders">
      <Slider />
      <Slider />
    </div>

    <div class="button-container">
      <Effects />
      <Loop />
      <Play />
    </div>
  </div>
</template>

<script>
import TrackInfo from './TrackInfo'
import WaveForm from './WaveForm'
import Slider from './Slider'
import Effects from './Effects'
import Loop from './Loop'
import Play from './Play'

export default {
  name: 'AudioPlayer',
  components: {
    Slider,
    WaveForm,
    Effects,
    Loop,
    Play,
    TrackInfo
  }
}
</script>

<style lang="sass" scoped>
.audio-player
  height: 100%
  width: 40%

  .effect-sliders
    height: 15%
    display: flex
    justify-content: space-between

  .button-container
    height: 20%
    display: flex
    justify-content: space-between
    align-items: center
</style>