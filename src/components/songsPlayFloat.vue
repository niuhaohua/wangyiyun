<template>
  <div>
    <audio ref="audio" class="songs-play-float" controls autoplay loop>
      <source :src="null" />您的浏览器不支持 audio 元素。
    </audio>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState([
      'songs'
    ])
  },
  data() {
    return {
    }
  },
  watch: {
    songs: {
      handler(newName, oldName) {
        console.log(this.$refs)
        this.$nextTick(() => {
          this.$refs.audio.src = 'https://music.163.com/song/media/outer/url?id='+this.songs.songsId
        })
      },
      deep: true,
      immediate: true
    }
  },
  mounted() {

  },
  created() {
   
  },
  methods: {
  },
  beforeDestroy() {

  }
}
</script>

<style lang="css" scoped>
.songs-play-float {
  position: fixed;
  top: 400px;
  right: 0;
  width: 50%;
  z-index: 9999;
}
</style>
