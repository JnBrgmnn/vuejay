<template>
  <div class="panel">
    <div class="panel-container">
      <div class="volume-container">
        <VolumeSlider />
      </div>
      <div class="knob-container">
        <Knob text="Treble"/>
        <Knob text="Mid"/>
        <Knob text="Bass"/>
      </div>
    </div>
    <div class="crossfade-container">
      <CrossfadeSlider />
    </div>
  </div>
</template>

<script>
import Knob from './Knob'
import VolumeSlider from './VolumeSlider'
import CrossfadeSlider from './CrossfadeSlider'

export default {
  name: 'Panel',
  components: {
    Knob,
    VolumeSlider,
    CrossfadeSlider
  },
}
</script>

<style lang="sass" scoped>
.panel
  width: 20%
</style>