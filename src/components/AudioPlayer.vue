<template>
  <div v-if="secondaryColor === false" class="audio-player">
    <div class="container">
      <TrackInfo :song="song"/>
      <div class="waveform-container">
        <div id="waveform-left">
        </div>
      </div>
      <div class="playback-rate-container">
        <Slider @sliderInput="setPlaybackRate"/>
        <p>Playback-Rate: {{ this.playbackRate }}</p>
      </div>
      <div class="button-container">
        <Effects @effect="setEffect"/>
        <Loop @loop="loopTrack"/>
        <Play @play="toggleTrack"/>
      </div>
    </div>

    <div class="panel-container">
      <div class="knob-container">
        <Knob text="Treble" @knob="setTreble" :secondaryColor="secondaryColor"/>
        <Knob text="Mid" @knob="setMid" :secondaryColor="secondaryColor"/>
        <Knob text="Bass" @knob="setBass" :secondaryColor="secondaryColor"/>
      </div>
      <div class="volume-container">
        <VolumeSlider @volumeInput="setVolume"/>
      </div>
    </div>
  </div>

  <div v-else-if="secondaryColor === true" class="audio-player secondary-color">
    <div class="container">
      <TrackInfo :song="song"/>
      <div class="waveform-container">
        <div id="waveform-left">
        </div>
        <div id="waveform-right">
        </div>
      </div>
      <div class="playback-rate-container">
        <Slider @sliderInput="setPlaybackRate" :secondaryColor="secondaryColor"/>
        <p>Playback-Rate: {{ this.playbackRate }}</p>
      </div>
      <div class="button-container secondary-color">
        <Effects @effect="setEffect" :secondaryColor="secondaryColor"/>
        <Loop @loop="loopTrack" :secondaryColor="secondaryColor"/>
        <Play @play="toggleTrack" :secondaryColor="secondaryColor"/>
      </div>
    </div>

    <div class="panel-container secondary-color">
      <div class="knob-container">
        <Knob text="Treble" @knob="setTreble" :secondaryColor="secondaryColor"/>
        <Knob text="Mid" @knob="setMid" :secondaryColor="secondaryColor"/>
        <Knob text="Bass" @knob="setBass" :secondaryColor="secondaryColor"/>
      </div>
      <div class="volume-container">
        <VolumeSlider @volumeInput="setVolume" :secondaryColor="secondaryColor"/>
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
import Regions from 'wavesurfer.js/dist/plugin/wavesurfer.regions.min.js'

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
  data() {
    return {
      playbackRate: 1,
    }
  },
  props: {
    secondaryColor: Boolean,
    song: Object
  },
  async mounted() {
    if(this.secondaryColor === false) {
      this.wavesurfer = WaveSurfer.create({
        container: '#waveform-left',
        waveColor: '#ffd8d6',
        progressColor: '#EE4540',
        plugins: [
          Regions.create({})
        ]
      })
    }

    if(this.secondaryColor === true) {
      this.wavesurfer = WaveSurfer.create({
        container: '#waveform-right',
        waveColor: '#f28f9d',
        progressColor: '#C72C41',
        plugins: [
          Regions.create({})
        ]
      })
    }
    this.wavesurfer.load('./Linkin_Park-In_The_End.mp3')

    this.treble = this.wavesurfer.backend.ac.createBiquadFilter()
    this.treble.type = 'highshelf'
    this.treble.gain.value = 5

    this.mid = this.wavesurfer.backend.ac.createBiquadFilter()
    this.mid.type = 'peaking'
    this.mid.gain.value = 5

    this.bass = this.wavesurfer.backend.ac.createBiquadFilter()
    this.bass.type = 'lowshelf'
    this.bass.gain.value = 5

    const context = this.wavesurfer.backend.ac

    context.audioWorklet.addModule('./Bitcrusher.js').then(() => {
      this.bitcrusher = new AudioWorkletNode(context, 'bitcrusher', {
        parameterData: {bitDepth: 4, frequencyReduction: .5}
      })
    })
  },
  methods: {
    setPlaybackRate(value) {
      if(value > 0) {
        this.playbackRate = value/50
        this.wavesurfer.setPlaybackRate(this.playbackRate)
      } else {
        this.playbackRate = 1/50
        this.wavesurfer.setPlaybackRate(this.playbackRate)
      }
    },
    setEffect(isActive, effect) {
      if(isActive) {
        if(effect === 'Bitcrusher') {
          this.wavesurfer.backend.setFilters([this.treble, this.mid, this.bass, this.bitcrusher])
        }
      } else {
        this.wavesurfer.backend.setFilters([this.treble, this.mid, this.bass])
      }
    },
    loopTrack(loopValue, isLooped) {
      if(isLooped) {
        this.wavesurfer.addRegion({
          id: 0,
          start: this.wavesurfer.getCurrentTime(),
          end: this.wavesurfer.getCurrentTime() + loopValue,
          loop: true,
        })
      } else {
        this.wavesurfer.clearRegions()
      }
    },
    toggleTrack() {
      this.wavesurfer.playPause()
    },
    setTreble(value) {
      this.treble.gain.value = value/10
    },
    setMid(value) {
      this.mid.gain.value = value/10
    },
    setBass(value) {
      this.bass.gain.value = value/10
    },
    setVolume(value) {
      this.wavesurfer.setVolume(value/100)
    }
  },
  watch: {
    song: function(song) {
      this.wavesurfer.load(song.path)
    }
  },
}
</script>

<style lang="sass" scoped>
.audio-player
  display: flex
  height: 100%
  width: 50%

  &.secondary-color
    flex-direction: row-reverse

  .container
    width: 80%

    .playback-slider
      height: 15%
      display: flex
      justify-content: space-between

    .playback-rate-container
      margin-bottom: 20px

    .button-container
      height: 20%
      display: flex
      justify-content: space-between
      align-items: center

      &.secondary-color
        flex-direction: row-reverse

  .panel-container
    display: flex
    width: 20%
    height: 100%

    &.secondary-color
      flex-direction: row-reverse

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