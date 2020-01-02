<template>
  <div>
    <div class="mixer">
      <AudioPlayer :secondaryColor="false" :song="songTrackOne"/>
      <AudioPlayer :secondaryColor="true" :song="songTrackTwo"/>
    </div>
    <Slider class="crossfade-slider" />
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
  props: {
    songTrackOne: Object,
    songTrackTwo: Object
  }
}
</script>

<style lang="sass" scoped>
.mixer
  display: flex
  flex-wrap: wrap
  height: 80%
  padding: 0 50px 0

.crossfade-slider
  position: relative
  left: 50%
  transform: translateX(-50%)
  height: 8%
  width: 20%
</style>