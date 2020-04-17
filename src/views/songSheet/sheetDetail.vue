<template>
  <div class="container">
    <van-nav-bar
      title="歌单列表"
      :fixed="true"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      :z-index="10001"
    />
    <div class="top">
      <div
        class="sheetDetailBg"
        :style="'background-image:url('+ sheetInfo.coverImgUrl +'?param=170y170)'"
      ></div>
      <div class="sheetDetail">
        <img class="topImg" :src="sheetInfo.coverImgUrl" alt />
        <div class="info">
          <div class="title">{{sheetInfo.name}}</div>
          <div class="user">
            <img class="userImg" :src="creator.avatarUrl" alt />
            <div class="userName">{{creator.nickname}}</div>
          </div>
        </div>
      </div>
      <div class="tags">
        <van-tag v-for="(item,index) in sheetInfo.tags" plain :type="tagsType[index%4]">{{item}}</van-tag>
      </div>
      <div class="description" ref="descriptionDom">
        <span>简介：</span>
        <div class="descriptionContent" ref="descriptionContent">
          <p v-for="item in description">{{item}}</p>
        </div>

        <div class="mask" v-show="mask"></div>
        <span class="maskToggle" @click="maskToggle()">{{maskText}}</span>
      </div>
    </div>
    <div class="h10"></div>
    <song-list :song-list="songList" />
  </div>
</template>

<script>
import SongList from '../../components/songList'
export default {
  components: {
    SongList
  },
  data() {
    return {
      sheetInfo: {
        name: '',
        description: '',
        coverImgUrl: '',
        createTime: null,
        tags: [],
        descriptionH: 100,
      },
      maskFlag: null,
      maskText: '展开',
      mask: true,
      creator: {},
      songList: [],
      description: [],
      sheetId: null,
      tagsType: ['primary', 'success', 'danger', 'warning']
    }
  },

  mounted() {
    this.sheetId = this.$route.query.sheetId ? this.$route.query.sheetId : 0
    this.getDetail(this.sheetId)
  },
  methods: {
    getDetail(id) {
      this.$api.homeApi.songSheetDetail({
        id: id
      }, res => {
        if (res.code === 200) {
          for (let item in this.sheetInfo) {
            this.sheetInfo[item] = res.playlist[item]
          }
          let des = JSON.stringify(this.sheetInfo['description'])
          this.description = des.substring(1, des.length - 1).split('\\n')
          this.creator = res.playlist.creator
          this.songList = res.playlist.tracks
          this.$nextTick(() => {
            this.descriptionH = this.$refs.descriptionContent.clientHeight
            this.$refs.descriptionDom.style.height = '100px'
            this.maskFlag = true
            this.maskText = '展开'
            this.mask = true
          })
        }
      }, err => {

      })
    },
    onClickLeft() {
      this.$router.back()
    },
    maskToggle() {
      if (this.maskFlag) {
        console.log(this.descriptionH)
        this.$refs.descriptionDom.style.height = (this.descriptionH + 70) + 'px'
        this.maskText = '收起'
      } else {
        this.$refs.descriptionDom.style.height = '100px'
        this.maskText = '展开'
      }
      this.maskFlag = !this.maskFlag
      console.log(this.maskFlag, this.mask)
      this.mask = this.maskFlag
    },
    scrollToTop(el) {

    }
  },
  beforeDestroy() {

  }
}
</script>

<style lang="css" scoped>
.van-nav-bar {
  z-index: 10000;
}
.tags {
  padding: 5px 10px;
  padding-bottom: 0;
  background: #fff;
  position: relative;
  z-index: 10000;
}
.tags .van-tag {
  margin-right: 16px;
}
.container {
  padding: 46px 0;
}
.top {
  position: relative;
}
.sheetDetailBg {
  position: absolute;
  z-index: 9999;
  width: 300px;
  height: 160px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
  -webkit-filter: blur(20px);
  filter: blur(20px);
  -webkit-transform: scale(1.5);
  -ms-transform: scale(1.5);
  transform: scale(1.5);
  overflow: hidden;
}
.sheetDetailBg:after {
  content: " ";
  background-color: rgba(0, 0, 0, 0.25);
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
}
.sheetDetail {
  position: relative;
  z-index: 10000;
  padding: 20px 15px;
  display: flex;
  align-items: top;
  box-sizing: border-box;
}
.topImg {
  display: block;
  width: 120px;
  height: 120px;
  margin-right: 20px;
}
.info {
  width: 205px;
}
.title {
  height: 44px;
  margin-bottom: 20px;
  line-height: 22px;
  font-size: 19px;
  color: #fff;
}
.user {
  display: flex;
  align-items: center;
}
.userImg {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}
.userName {
  font-size: 16px;
  color: #e6e6e6;
}
.description {
  position: relative;
  padding: 10px 10px;
  font-size: 14px;
  background: #fff;
  z-index: 10000;
  color: #333;
  overflow: hidden;
  transition: height 0.3s;
}
.description p {
  margin-top: 10px;
}
.description .mask {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 120px;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.2),
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.7),
    rgba(255, 255, 255, 0.9),
    rgba(255, 255, 255, 1),
    rgba(255, 255, 255, 1)
  );
}
.description .maskToggle {
  position: absolute;
  display: block;
  left: 50%;
  margin-left: -50px;
  width: 100px;
  height: 40px;
  line-height: 40px;
  /* margin-top: 80px; */
  bottom: 0;
  font-size: 15px;
  text-align: center;
  color: #333;
  z-index: 10001;
}
.h10 {
  height: 10px;
  background: #eeeeee;
}
</style>
