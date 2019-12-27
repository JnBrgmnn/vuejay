<template>
  <div class="audio-player">
    <div class="track-info">
      <span class="artist"></span>
      <span class="title"></span>
    </div>
    <WaveForm />
    <div class="effect-sliders">
      <EffectSlider />
      <EffectSlider />
    </div>

    <div class="effects-container">
      <div class="effects">
        <button class="effect-button">Slicer</button>
        <button class="dropdown-button"><i class="fas fa-caret-down"></i></button>
        <div class="effects-dropdown-menu">
          <div class="dropdown">
            <div class="effect"></div>
            <div class="effect"></div>
            <div class="effect"></div>
          </div>
        </div>
      </div>
      <div class="loop-container">
        <button class="minus-button"><i class="fas fa-minus"></i></button>
        <button class="loop-button"><i class="fas fa-undo-alt"></i><span> 4</span></button>
        <button class="plus-button"><i class="fas fa-plus"></i></button>
      </div>
      <div class="play-container">
        <button class="play-button"><i class="fas fa-play"></i></button>
      </div>
    </div>
  </div>
</template>

<script>
import EffectSlider from './EffectSlider'
import WaveForm from './WaveForm'
export default {
  name: 'AudioPlayer',
  components: {
    EffectSlider,
    WaveForm
  }
}
</script>

<style>

</style>