<template>
  <div class="music-list">
    <div class="search-container">
      <input 
          class="search-bar" 
          placeholder="Suche deinen Song!"
          @keyup="filterSongs">
    </div>
    <div class="music-table-container">
      <table class="music-table">
        <tr class="table-headings">
          <th class="button-column"></th>
          <th class="artist-column">Artist</th>
          <th class="titel-column">Title</th>
          <th class="duration-column">Duration</th>
        </tr>
        <tr v-for="(song, index) in filteredSongs" :key="index">
          <td>
            <div class="table-button-container">
              <button class="track-one" @click="setSongTrackOne(song)"></button>
              <button class="track-two" @click="setSongTrackTwo(song)"></button>
            </div>
          </td>
          <td>{{ song.artist }}</td>
          <td>{{ song.title }}</td>
          <td>{{ song.duration }}</td>
        </tr>
    </table>
    </div>
  </div>
</template>

<script>
export default {
    name: 'MusicList',
    data() {
      return {
        songs: null,
        filteredSongs: null,
      }
    },
    mounted() {
      let promise = this.loadJSON()
      promise.then((response) => {
        const data = JSON.parse(response)
        this.songs = data.data
        this.filteredSongs = this.songs
      })
    },
    methods: {
      loadJSON() {
        return new Promise((resolve) => {
          let request = new XMLHttpRequest()
          request.overrideMimeType('application/json')
          request.open('GET', './data.json', true)
          request.onreadystatechange = function() {
            if(request.readyState === 4 && request.status === 200) {
              resolve(request.responseText)
            }
          }
          request.send(null)
        })
      },
      setSongTrackOne(song) {
        this.$emit('songTrackOne', song)
      },
      setSongTrackTwo(song) {
        this.$emit('songTrackTwo', song)
      },
      filterSongs(event) {
        let inputLowerCase = event.target.value.toLowerCase()

        this.filteredSongs = this.songs.filter((song) => {
          return  song.artist.toLowerCase().indexOf(inputLowerCase) > -1 ||
                  song.title.toLowerCase().indexOf(inputLowerCase) > -1 ||
                  (song.artist.toLowerCase() + ' ' + song.title.toLowerCase()).indexOf(inputLowerCase) > -1
        })
      }
    }
}
</script>

<style lang="sass" scoped>
@import '../assets/sass/button'
@import '../assets/sass/variables'

.music-list
  display: flex
  height: 49%
  height: calc(50% - 20px)
  background-color: $background-color-dark

  .search-container
    width: 30%
    display: flex
    justify-content: center
    align-items: center
    border-right: solid 2px $color-secondary-dark

    ::-webkit-input-placeholder
      color: $color-secondary-dark
      opacity: .5

    .search-bar
      font-size: 18px
      color: $color-secondary
      background-color: $color-primary-light
      width: 80%
      height: 50px
      box-sizing: border-box
      border-radius: 50px
      border: solid 3px $color-secondary
      padding-left: 15px
      transition: all .1s ease-in
      &:focus
          outline: none
          width: 90%
          height: 60px

  .music-table-container
    width: 70%
    overflow-y: scroll

    .music-table
      padding: 10px 30px 20px
      width: 100%
      text-align: left
      .button-column
        width: 12%
        
      .artist-column
        width: 33%

      .title-column
        width: 35%

      .duration-column
        width: 10%

      tr
        height: 40px

        th
          font-size: 20px
            
        td:last-child, th:last-child
          text-align: right

        .table-button-container
          height: 40px
          display: flex
          justify-content: flex-start
          align-items: center

          button
            height: 70%
            width: 50px
            font-size: 14px

            &:focus
              outline: none

            &.track-one
              background-color: $color-primary
              border-top-left-radius: 5px
              border-bottom-left-radius: 5px
              &:active
                background-color: $color-primary-dark

            &.track-two
              background-color: $color-secondary
              border-top-right-radius: 5px
              border-bottom-right-radius: 5px
              &:active
                background-color: $color-secondary-dark
</style>