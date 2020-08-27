<template>
  <div>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <div class="content">
        <Banner class="banner" />
      </div>

      <div class="content">
        <div class="tag">
          <van-row gutter="20">
            <van-col span="6" @click="toPath('/ranking')">
              <div class="tag-icon">
                <van-icon name="fire" />
              </div>
              <p>排行榜</p>
            </van-col>
            <van-col span="6" @click="toPath('/songSheet')">
              <div class="tag-icon">
                <van-icon name="graphic" />
              </div>
              <p>歌单</p>
            </van-col>
            <van-col span="6" @click="toPath('/songSheet')">
              <div class="tag-icon">
                <van-icon name="service" />
              </div>
              <p>电台</p>
            </van-col>
            <van-col span="6" @click="toPath('/songSheet')">
              <div class="tag-icon">
                <van-icon name="photo" />
              </div>
              <p>图片</p>
            </van-col>
          </van-row>
        </div>
      </div>

      <div class="content">
        <div @click="toPath('/hotWall')" class="hot-wall">
          <div class="hot-wall-bg"></div>
          <p class="title">热评墙</p>
          <p class="mixfonts">你是我年复一年藏在枕下的春秋大梦</p>
          <van-icon class="icon" name="arrow" />
        </div>
      </div>

      <div class="content title clearfix">
        <div class="value">为你精挑细选</div>
        <div class="more" @click="toPath('/songSheet')">查看更多</div>
      </div>
      <div class="swiper-box">
        <Swiper1 :dom="'swiper1-1'" :list="resourceList" />
      </div>

      <div class="content title clearfix">
        <div class="value">歌曲推荐</div>
        <div class="more" @click="toPath('/songSheet')">查看更多</div>
      </div>
      <div class="swiper-box">
        <Swiper2 :dom="'swiper2-1'" :list="songsList" />
      </div>

      <div class="content title clearfix">
        <div class="value">{{sceneData.title}}</div>
        <div class="more" @click="toPath('/songSheet')">查看更多</div>
      </div>
      <div class="swiper-box">
        <Swiper1 :dom="'swiper1-2'" :list="sceneData.list" />
      </div>

      <div class="content title clearfix">
        <div class="value">新歌速递</div>
        <div class="more" @click="toPath('/songSheet')">查看更多</div>
      </div>
      <div class="swiper-box">
        <Swiper1 :dom="'swiper1-3'" :list="newSongsList" />
      </div>
    </van-pull-refresh>
  </div>
</template>

<script>
import Swiper1 from '../components/swiper1'
import Swiper2 from '../components/swiper2'
import Banner from '../components/banner'
export default {
  components: {
    Swiper1,
    Swiper2,
    Banner
  },
  data() {
    return {
      isLoading: false,
      resourceList: [],
      songsList: [],
      newSongsList: [],
      sceneData: {
        list: [],
        title: ''
      }
    }
  },
  mounted() {
    this.topic()
    this.resource()
    this.songs()
    this.newsong()
    this.scene(),
    this.topsong()
    
    // this.songsSheetList()
  },
  created() {
  },
  methods: {
    topic() {
      this.$api.homeApi.topic({ limit: 30, offset: 30 }, data => {
        console.log(data)
      }, err => {

      })
    },
    topsong() {
      this.$api.homeApi.topsong({ limit: 30, offset: 30 }, data => {
        console.log(data)
      }, err => {

      })
    },
    resource() {
      this.$api.homeApi.resource({}, data => {
        data.recommend.sort(() => Math.random() - 0.5)
        this.resourceList = data.recommend.slice(0, 6)
      }, err => {
      })
    },
    songs() {
      this.$api.homeApi.songs({}, data => {
        data.recommend.sort(() => Math.random() - 0.5)
        this.songsList = data.recommend.slice(0, 12)
      }, err => {
      })
    },
    sceneSheetList(cat) {
      this.$api.homeApi.songsSheetList({
        order: 'hot',
        limit: 30,
        cat: cat
      }, data => {
        data.playlists.sort(() => Math.random() - 0.5)
        this.sceneData.list = data.playlists.slice(0, 6)
      }, err => {
      })
    },
    newsong() {
      this.$api.homeApi.newsong({}, data => {
        this.newSongsList = data.result
      }, err => {
      })
    },
    scene() {
      let hours = (new Date()).getHours()
      let sceneObj = {
        '0,1,2,3,4,5,19,20,21,22,23': {
          cat: '夜晚',
          title: '宁静以致远'
        },
        '6,7,8,9,10,11,12': {
          cat: '清晨',
          title: '早起拥抱太阳'
        },

        '13,14,15,16,17,18': {
          cat: '下午茶',
          title: '爱上音乐为伴的下午'
        },
      }
      for (let key in sceneObj) {
        if (key.split(",").includes(String(hours))) {
          this.sceneSheetList(sceneObj[key].cat)
          this.sceneData.title = sceneObj[key].title
        }
      }
      return
    },
    onRefresh() {
      this.topic()
      this.resource()
      this.songs()
      this.scene()
      setTimeout(() => {
        this.isLoading = false;
      }, 500)
    },
    toPath(path) {
      this.$router.push(path)
    }
  },
  beforeDestroy() {
  }
}
</script>

<style lang="less" scoped>
.content {
  margin: 0 15px;
  overflow: hidden;
}

.hot-wall {
  position: relative;
  box-sizing: border-box;
  height: 100px;
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 25px;
  padding: 16px;
  color: #fff;
  border-radius: 12px;
  box-shadow: 0 8px 12px #ebedf0;
  overflow: hidden;
}
.hot-wall-bg {
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  position: absolute;
  z-index: -1;
  background-image: url("../assets/hotwallbg.jpg");
  background-size: cover;
  background-position: 50%;
  filter: blur(0.53333rem);
  overflow: hidden;
}

.hot-wall .title {
  font-size: 24px;
  color: #fff;
}
.mixfonts {
  margin-top: 20px;
  font-size: 10px;
}
.icon {
  position: absolute;
  right: 20px;
  top: 27px;
  font-size: 45px;
}
.tag {
  font-size: 13px;
  text-align: center;
  margin-bottom: 5px;
}
.tag-icon {
  font-size: 30px;
  color: red;
}
.title {
  color: #333;
  font-size: 12px;
  margin-bottom: 10px;
}
.title .value {
  float: left;
  font-size: 15px;
  font-weight: 600;
}
.title .more {
  font-size: 12px;
  float: right;
  color: #666;
  height: 18px;
  line-height: 18px;
  width: 60px;
  text-align: center;
  border: 1px solid #bfbfbf;
  border-radius: 10px;
}
.clearfix:after {
  content: "";
  display: block;
  clear: both;
}
.banner {
  margin-top: 15px;
  margin-bottom: 15px;
  position: relative;
}
.swiper-box {
  overflow: hidden;
}
.swiper1,
.swiper2,
.swiper3 {
  padding: 0 4%;
  margin-bottom: 30px;
}
</style>
