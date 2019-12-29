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
        <tr v-for="(entry, index) in filteredEntries" :key="index">
          <td>
            <div class="table-button-container">
              <button class="track-one" @click="setPathTrackOne(entry.path)"></button>
              <button class="track-two" @click="setPathTrackTwo(entry.path)"></button>
            </div>
          </td>
          <td>{{ entry.artist }}</td>
          <td>{{ entry.title }}</td>
          <td>{{ entry.duration }}</td>
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
        entries: null,
        filteredEntries: null,
      }
    },
    mounted() {
      let promise = this.loadJSON()
      promise.then((response) => {
        const data = JSON.parse(response)
        this.entries = data.data
        this.filteredEntries = this.entries
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
      setPathTrackOne(path) {
        this.$emit('pathTrackOne', path)
      },
      setPathTrackTwo(path) {
        this.$emit('pathTrackTwo', path)
      },
      filterSongs(event) {
        let inputLowerCase = event.target.value.toLowerCase()

        this.filteredEntries = this.entries.filter((entry) => {
          return  entry.artist.toLowerCase().indexOf(inputLowerCase) > -1 ||
                  entry.title.toLowerCase().indexOf(inputLowerCase) > -1 ||
                  (entry.artist.toLowerCase() + ' ' + entry.title.toLowerCase()).indexOf(inputLowerCase) > -1
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