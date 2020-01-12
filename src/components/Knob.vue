<template>
  <div class="knob">
    <circle-slider v-if="secondaryColor === false" class="knob-slider"
        v-model="value"
        :progress-width="8"
        :circleWidth="8"
        :knob-radius="8"
        :side="50"
        :circleColor="'#ffd8d6'"
        :progressColor="'#EE4540'"
        :knobColor="'#EE4540'"
    />
    <circle-slider v-else-if="secondaryColor === true" class="knob-slider"
        v-model="value"
        :progress-width="8"
        :circleWidth="8"
        :knob-radius="8"
        :side="50"
        :circleColor="'#f28f9d'"
        :progressColor="'#C72C41'"
        :knobColor="'#C72C41'"
    />
    <p>{{ value }}</p>
    <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: 'Knob',
  data() {
    return {
      value: 50,
    }
  },
  props: {
    text: String,
    secondaryColor: Boolean,
    midiKnobValue: Number,
  },
  watch: {
    value: function() {
      this.$emit('knob', this.value)
    },
    midiKnobValue: function(newValue) {
      this.value = newValue * 100
    }
  }
}
</script>

<style lang="sass" scoped>
.knob
  width: 100px
  text-align: center
</style>