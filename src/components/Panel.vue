<template>
  <div class="panel">
    <div class="panel-container">
      <div class="knob-container">
        <Knob text="Treble"/>
        <Knob text="Mid"/>
        <Knob text="Bass"/>
      </div>
      <div class="volume-container">
        <VolumeSlider />
      </div>
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
  }
}
</script>

<style lang="sass" scoped>
.panel
  width: 20%

  .panel-container
    height: 80%
    display: flex

    .knob-container
      width: 25%
      display: flex
      flex-direction: column
      justify-content: space-evenly

    .volume-container
      display: flex
      justify-content: center
      width: 25%

  .crossfade-container
    height: 20%
    display: flex
    justify-content: center
    align-items: center
</style>