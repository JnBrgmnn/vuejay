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

<style>

</style>