<template>
  <div class="knob">
    <circle-slider v-if="secondaryColor === false" class="knob-slider"
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
    <circle-slider v-else-if="secondaryColor === true" class="knob-slider"
        :value="sliderValue"
        @input="handleInput"
        :progress-width="8"
        :circleWidth="8"
        :knob-radius="8"
        :side="50"
        :circleColor="'#f28f9d'"
        :progressColor="'#C72C41'"
        :knobColor="'#C72C41'"
    />
    <p>{{ sliderValue }}</p>
    <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: 'Knob',
  data() {
    return {
      sliderValue: 50,
      isReady: false
    }
  },
  props: {
    text: String,
    secondaryColor: Boolean
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