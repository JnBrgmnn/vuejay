<template>
  <div class="audio-player">
    <TrackInfo />
    <div class="waveform-container">
      <div id="waveform"></div>
    </div>
    <div class="effect-sliders">
      <Slider />
      <Slider />
    </div>

    <div class="button-container">
      <Effects />
      <Loop />
      <Play v-on:play="toggleTrack"/>
    </div>
  </div>
</template>

<script>
import TrackInfo from './TrackInfo'
import Slider from './Slider'
import Effects from './Effects'
import Loop from './Loop'
import Play from './Play'

import WaveSurfer from 'wavesurfer.js'

export default {
  name: 'AudioPlayer',
  components: {
    Slider,
    Effects,
    Loop,
    Play,
    TrackInfo
  },
  mounted() {
    this.wavesurfer = WaveSurfer.create({
      container: '#waveform',
      waveColor: 'violet',
      progressColor: 'purple'
    })

    this.wavesurfer.load('./basic_beat.wav')
  },
  methods: {
    toggleTrack() {
      this.wavesurfer.playPause()
    }
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