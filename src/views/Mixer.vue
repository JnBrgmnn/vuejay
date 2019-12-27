<template>
  <div class="mixer">
    <AudioPlayer />
    <Panel />
    <AudioPlayer />
  </div>
</template>

<script>
import AudioPlayer from '../components/AudioPlayer'
import Panel from '../components/Panel'

export default {
  name: 'Mixer',
  components: {
    AudioPlayer,
    Panel,
  }
}
</script>

<style lang="sass" scoped>
.mixer
  display: flex
  height: 40%
  padding: 0 50px 20px
</style>