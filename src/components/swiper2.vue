<template>
  <div :class="dom">
    <div class="swiper-wrapper">
      <div v-for="(item,key) in (data)" :key="key" class="swiper-slide">
        <div class="song-item" v-for="(s,index) in item" :key="index" @click="clickSongsList(s)">
          <img v-lazy="s.album.picUrl" alt />
          <div class="text">
            <p>
              <span class="song-name">{{s.name}}</span>
              <span class="ren-name"> - {{s.artists[0].name}}</span>
            </p>
            <!-- <p>{{item.album.type}} - {{item.album.name}}</p> -->
            <p>{{s.reason}}</p>
          </div>
          <div v-show="s.id !== songs.songsId" class="right">
            <van-icon name="play-circle-o" />
          </div>
          <div v-show="s.id == songs.songsId"  class="play"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from '../plugins/swiper'
import { mapMutations,mapState } from 'vuex'
export default {
  computed: {
    ...mapState([
      'songs'
    ])
  },
  data() {
    return {
      data: [],
      swiper: null,
      options: {
        autoplayDisableOnInteraction: false,
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true //修改swiper的父元素时，自动初始化swiper
      },
    }
  },
  props: {
    dom: {
      type: String,
      required: ''
    },
    list: {
      type: Array,
      required: []
    }
  },
  watch: {
    list: {
      handler(newName, oldName) {
        this.data = []
        for (var i = 0; i < newName.length; i += 3) {
          this.data.push(newName.slice(i, i + 3));
        }
        this.$nextTick(() => {
          this.initSwiper()
        })
      },
      deep: true,
      immediate: true
    }
  },
  mounted() {
  },
  methods: {
    initSwiper() {
      setTimeout(() => {
        this.swiper = Swiper('.' + this.dom, this.options);
      }, 300)

    },
    detail(item) {
      this.$router.push({ path: '/songSheet/sheetDetail', query: { sheetId: item.id } })
    },
    ...mapMutations({clickSongsList:'GET_SONGSID'})
  },
  beforeDestroy() {

  }
}
</script>

<style lang="less" scoped>
.swiper-slide {
  overflow: hidden;
}
.swiper-slide .song-item {
  display: block;
  height: 50px;
  margin-bottom: 10px;
}
.swiper-slide .song-item:nth-child(3n + 3) {
  margin-bottom: 0px;
}
.swiper-slide img {
  float: left;
  width: 50px;
  height: 50px;
  border-radius: 5px;
  margin-right: 10px;
}
.swiper-slide .text {
  width: 230px;
  float: left;
  font-size: 12px;
  height: 33px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  height: 50px;
}
.swiper-slide .text .song-name {
  margin-right: 5px;
  float: left;
  color: #333;
  font-size: 14px;
  line-height: 25px;
  max-width: 160px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.swiper-slide .ren-name {
  float: left;
  color: #999;
  font-size: 12px;
  line-height: 25px;
  max-width: 60px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.swiper-slide .text p:first-child {
  height: 25px;
}
.swiper-slide .text p:last-child {
  height: 25px;
  color: #999;
  font-size: 12px;
  line-height: 25px;
}
.swiper-slide .song-item .right {
    float: left;
  width: 30px;
  margin-top: 15px;
  text-align: center;
  font-size: 22px;
  color:#FF3030
}
.swiper-slide .song-item .play{
  float: left;
  width: 30px;
  height: 30px;
  background: url('../assets/play.gif') no-repeat;
  background-size: 23px 23px;
  background-position: center center;
  // margin-left: 2px;
  margin-top: 10px;
}
</style>
