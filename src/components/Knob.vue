<template>
  <div class="knob">
    <circle-slider class="knob-slider"
        :value="sliderValue"
        @input="handleInput"
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
      sliderValue: 50,
      isReady: false
    }
  },
  methods: {
    handleInput(value) {
      if(this.isReady) {
        this.$emit('knob', value)
      }
      this.sliderValue = value
      this.isReady = true
    }
  }
}
</script>

<style lang="sass" scoped>
.knob
  width: 100px
  text-align: center
</style>