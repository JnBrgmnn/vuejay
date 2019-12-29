<template>
  <div class="audio-player">
    <div class="container">
      <TrackInfo />
      <div class="waveform-container">
        <div id="waveform"></div>
      </div>
      <div class="effect-sliders">
        <Slider @sliderInput="setEffectValueLeft"/>
        <Slider @sliderInput="setEffectValueRight"/>
      </div>
      <div class="button-container">
        <Effects @effect="setEffect"/>
        <Loop @loop="loopTrack"/>
        <Play @play="toggleTrack"/>
      </div>
    </div>

    <div class="panel-container">
      <div class="knob-container">
        <Knob text="Treble" @knob="setTreble"/>
        <Knob text="Mid" @knob="setMid"/>
        <Knob text="Bass" @knob="setBass"/>
      </div>
      <div class="volume-container">
        <VolumeSlider @volumeInput="setVolume"/>
      </div>
    </div>
  </div>
</template>

<script>
import TrackInfo from './TrackInfo'
import Slider from './Slider'
import Effects from './Effects'
import Loop from './Loop'
import Play from './Play'
import Knob from './Knob'
import VolumeSlider from './VolumeSlider'

import WaveSurfer from 'wavesurfer.js'

export default {
  name: 'AudioPlayer',
  components: {
    Slider,
    Effects,
    Loop,
    Play,
    TrackInfo,
    Knob,
    VolumeSlider
  },
  mounted() {
    this.wavesurfer = WaveSurfer.create({
      container: '#waveform',
      waveColor: 'violet',
      progressColor: 'purple',
    })
    this.wavesurfer.load('./basic_beat.wav')
  },
  methods: {
    setEffectValueLeft(value) {
      console.log('Left Effect Slider', value)
    },
    setEffectValueRight(value) {
      console.log('Right Effect Slider', value)
    },

    setEffect(value) {
      console.log('Effect', value)
    },
    loopTrack(value) {
      console.log('Loop Button', value)
    },
    toggleTrack() {
      this.wavesurfer.playPause()

/*       this.treble = this.wavesurfer.backend.ac.createBiquadFilter()
      this.treble.type = 'highshelf'
      this.treble.gain.value = 25
      this.wavesurfer.backend.setFilter(this.treble) */
    },
    setTreble(value) {
      console.log('Treble', value)
    },
    setMid(value) {
      console.log('Mid', value)
    },
    setBass(value) {
      console.log('Bass', value)
    },
    setVolume(value) {
      console.log('Volume', value)
    }
  }
}
</script>

<style lang="sass" scoped>
.audio-player
  display: flex
  height: 100%
  width: 50%

  .container
    width: 80%

    .effect-sliders
      height: 15%
      display: flex
      justify-content: space-between

    .button-container
      height: 20%
      display: flex
      justify-content: space-between
      align-items: center

  .panel-container
    display: flex
    width: 20%
    height: 100%

    .knob-container
      height: 100%
      width: 50%
      display: flex
      flex-direction: column
      align-items: center
      justify-content: space-evenly

    .volume-container
      display: flex
      justify-content: center
      height: 100%
      width: 50%
</style>