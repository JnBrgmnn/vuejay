<template>
  <div>
    <div class="mixer">
      <AudioPlayer :secondaryColor="false" :song="songTrackOne" :crossfade="1 - (crossfade/1) / 100" @midiCrossfade="setMidiCrossfade"/>
      <AudioPlayer :secondaryColor="true" :song="songTrackTwo" :crossfade="(crossfade/1) / 100"/>
    </div>
    <Slider class="crossfade-slider" @sliderInput="setCrossfade" :midiCrossfade="midiCrossfade"/>
  </div>
</template>

<script>
import AudioPlayer from '../components/AudioPlayer'
import Slider from '../components/Slider'

export default {
  name: 'Mixer',
  components: {
    AudioPlayer,
    Slider
  },
  data() {
    return {
      crossfade: 50,
      midiCrossfade: 50
    }
  },
  props: {
    songTrackOne: Object,
    songTrackTwo: Object
  },
  methods: {
    setCrossfade(value) {
      this.crossfade = value
    },
    setMidiCrossfade(value) {
      this.midiCrossfade = value * 100
    }
  }
}
</script>

<style lang="sass" scoped>
.mixer
  display: flex
  flex-wrap: wrap
  height: 80%
  padding: 0 50px 20px

.crossfade-slider
  position: relative
  left: 50%
  transform: translateX(-50%)
  height: 8%
  width: 20%
</style>