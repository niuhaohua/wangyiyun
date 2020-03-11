
<template>
  <div class="container">
    <van-nav-bar title="村口大槐树下" :fixed="true" />
    <van-skeleton v-show="loading" :row="3" title v-for="key in 4" :key="key" style="margin-bottom:30px"/>

    <div v-show="!loading" v-for="item in list" :key="item.id">
      <div class="hotlistCard">
        <div class="hotlistCard-header">
          <van-image
            round
            fit="contain"
            width="40px"
            height="40px"
            :src="item.simpleUserInfo.avatar"
          />
          <div class="user-info">
            <div class="nickname">{{item.simpleUserInfo.nickname}}</div>
            <div class="date">{{item.time | renderTime}}</div>
          </div>
        </div>
        <div class="content">{{item.content}}</div>
        <div class="hotlistCard-footer">
          <div class="music">
            <img :src="item.simpleResourceInfo.songCoverUrl" alt />
            <div class="musicInfo">
              <div class="musicName">{{item.simpleResourceInfo.name}}</div>
              <div class="songName">{{item.simpleResourceInfo.artists[0].name}}</div>
            </div>
          </div>
          <div class="pinglun">
            <van-icon class="icon" name="chat-o" size="20px" />
            <span class="icon-info">{{item.replyCount | replyCount}}</span>
          </div>
        </div>
      </div>

      <van-divider :style="{borderColor: '#000' ,margin:'0',padding: '0' }" />
    </div>
  </div>
</template>

<script>
import store from '@/store'
export default {
  components: {
  },
  data() {
    return {
      list: [],
      loading: true
    }
  },
  mounted() {
    this.getHotWall()
  },
  methods: {
    getHotWall() {
      this.$api.homeApi.hotwallList({
        limit: 30,
        offset: 0
      }, data => {
        this.list = data
        console.log(this.list)
        setTimeout(() => {
          this.loading = false
        }, 5000)

      }, err => {
        console.log(err)
      })
    }

  },
  beforeDestroy() {
  }
}
</script>

<style lang="css" scoped>


.container {
  padding: 46px 0;
}
.hotlistCard {
  background-color: rgba(0, 0, 0, 0.9);
  padding: 15px;
  width: 100%;
  font-size: 16px;
  box-sizing: border-box;
  overflow: hidden;
  word-break: break-all;
}
.hotlistCard-header {
  margin-bottom: 1px;
}
.hotlistCard-header .user-info {
  display: inline-block;
  margin-left: 10px;
  vertical-align: top;
  padding-top: 5px;
}
.hotlistCard-header .user-info .nickname {
  font-size: 14px;
  line-height: 1;
  margin-bottom: 4px;
  color: darkgray;
}
.hotlistCard-header .user-info .date {
  font-size: 12px;
  color: darkgray;
}

.hotlistCard .content {
  font-size: 14px;
  box-sizing: border-box;
  overflow: hidden;
  word-break: break-all;
  padding-left: 50px;
  margin-bottom: 10px;
  color: darkcyan;
}

.hotlistCard-footer {
  position: relative;
  height: 40px;
  color: #ababcc;
}
.hotlistCard-footer .pinglun {
  position: absolute;
  width: 50px;
  height: 20px;
  right: 0;
  top: 15px;
}
.hotlistCard-footer .icon {
  position: absolute;
  right: 30px;
}
.hotlistCard-footer .icon-info {
  position: absolute;
  height: 20px;
  width: 30px;
  text-align: left;
  line-height: 23px;
  border-radius: 5px;
  font-size: 10px;
  right: 0;
}

.music {
  position: absolute;
  height: 40px;
  left: 45px;
}
.music img {
  width: 40px;
  height: 40px;
  box-sizing: border-box;
  border: 5px solid #000;
  border-radius: 50%;
  vertical-align: top;
  margin-right: 5px;
}
.music .musicInfo {
  display: inline-block;
  font-size: 12px;
  padding-top: 4px;
  color: #ababcc;
}
.van-divider {
  background: #000;
}
.music .musicName {
  width: 190px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>
