<template>
  <div class="mixer">
    <AudioPlayer :secondaryColor="false" :song="songTrackOne"/>
    <AudioPlayer :secondaryColor="true" :song="songTrackTwo"/>
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
    songTrackOne: Object,
    songTrackTwo: Object
  }
}
</script>

<style lang="sass" scoped>
.mixer
  display: flex
  height: 40%
  padding: 0 50px 20px
</style>