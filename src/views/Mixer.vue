<template>
  <div class="mixer">
    <AudioPlayer :number="'one'" :path="pathTrackOne"/>
    <AudioPlayer :number="'two'" :path="pathTrackTwo"/>
  </div>
</template>

<script>
import AudioPlayer from '../components/AudioPlayer'

export default {
  name: 'Mixer',
  components: {
    AudioPlayer,
  },
  props: {
    pathTrackOne: String,
    pathTrackTwo: String
  }
}
</script>

<style lang="sass" scoped>
.mixer
  display: flex
  height: 40%
  padding: 0 50px 20px
</style>