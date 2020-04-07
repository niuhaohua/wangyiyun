<template>
  <div>
    <div >
      <audio class="songs-play-float" ref="audio" controls autoplay loop>
        <source :src="null" />您的浏览器不支持 audio 元素。
      </audio>
    </div>
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
      flags: false,
      position: { x: 0, y: 0 },
      nx: '', ny: '', dx: '', dy: '', xPum: '', yPum: '',
    }
  },
  watch: {
    songs: {
      handler(newName, oldName) {
        this.$nextTick(() => {
          this.$refs.audio.src = 'https://music.163.com/song/media/outer/url?id=' + this.songs.songsId
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
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 99999;
  height: 30px;
  border-radius: 0;
}
</style>
