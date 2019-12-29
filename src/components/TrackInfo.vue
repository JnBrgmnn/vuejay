<template>
  <div class="track-info">
    <span class="artist">{{ song ? song.artist + ' - ' : 'Linkin Park - ' }}</span>
    <span class="title">{{ song ? song.title : 'In The End' }}</span>
  </div>
</template>

<script>
export default {
  name: 'TrackInfo',
  props: {
    song: Object
  }
}
</script>

<style lang="sass" scoped>
.track-info
  font-size: 24px
  height: 10%
</style>