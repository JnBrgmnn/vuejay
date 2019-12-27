<template>
  <div class="knob">
    <circle-slider class="knob-slider"
        v-model="sliderValue"
        :progress-width="8"
        :circleWidth="8"
        :knob-radius="8"
        :side="50"
        :circleColor="'#ffd8d6'"
        :progressColor="'#EE4540'"
        :knobColor="'#EE4540'"
    />
    <p>{{ sliderValue }}</p>
    <p>{{ text }}</p>
  </div>
</template>

<script>

export default {
  name: 'Knob',
  props: {
    text: String,
  },
  data() {
    return {
      sliderValue: 50
    }
  }
}
</script>

<style lang="sass" scoped>
.knob 
  width: 100px
  text-align: center
</style>