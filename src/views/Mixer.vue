<template>
  <div class="mixer">
    <AudioPlayer :number="'one'"/>
    <AudioPlayer :number="'two'"/>
  </div>
</template>

<script>
import AudioPlayer from '../components/AudioPlayer'

export default {
  name: 'Mixer',
  components: {
    AudioPlayer,
  }
}
</script>

<style lang="sass" scoped>
.mixer
  display: flex
  height: 40%
  padding: 0 50px 20px
</style>