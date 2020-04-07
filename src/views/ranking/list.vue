
<template>
  <div class="container">
    <van-nav-bar title="排行榜" :fixed="true" />
    <van-skeleton
      v-show="loading"
      :row="3"
      title
      v-for="key in 4"
      :key="key"
      style="margin-bottom:30px"
    />

    <div class="title">官方榜</div>
    <div class="ranking-item" v-for="(item,y) in list" v-if="item.tracks.length > 0" :key="y" @click="detail(item)">
      <img v-lazy="item.coverImgUrl" alt />
      <div class="update">{{item.updateFrequency}}</div>
      <div class="song-list">
        <p v-for="(song,index) in item.tracks" :key="index">{{song.first+' - '+song.second}}</p>
      </div>
    </div>

    <div class="title">更多榜单</div>
    <div class="box">
      <div class="item" v-for="item in list" v-if="item.tracks.length == 0" @click="detail(item)">
        <div class="update">{{item.updateFrequency}}</div>
        <img class="img" v-lazy="item.coverImgUrl" />
        <p>{{item.name}}</p>
      </div>
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
      this.$api.homeApi.toplist({}, data => {
        this.list = data.list
        this.loading = false
      }, err => {
        console.log(err)
      })
    },
    detail(item) {
      this.$router.push({ path: '/songSheet/sheetDetail', query: { sheetId: item.id } })
    }

  },
  beforeDestroy() {
  }
}
</script>

<style lang="css" scoped>
.container {
  padding: 56px 0;
}
.title {
  padding-left: 10px;
  margin-bottom: 10px;
  padding-top: 10px;
  font-size: 16px;
  font-weight: 700;
}
.ranking-item {
  position: relative;
  margin-left: 10px;
  margin-bottom: 15px;
  height: 110px;
  clear: both;
}
.ranking-item .update {
  position: absolute;
  width: 110px;
  height: 25px;
  bottom: 0;
  left: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.1),
    rgba(0, 0, 0, 0.2),
    rgba(0, 0, 0, 0.3),
    rgba(0, 0, 0, 0.4)
  );
  color: #fff;
  line-height: 30px;
  font-size: 12px;
  text-align: center;
  border-radius: 0 0 5px 5px;
}
.ranking-item img {
  display: block;
  width: 110px;
  height: 110px;
  border-radius: 5px;
  float: left;
}
.ranking-item .song-list {
  float: left;
  margin-left: 10px;
  margin-top: 10px;
}
.ranking-item .song-list p {
  font-size: 14px;
  height: 30px;
  line-height: 30px;
}
.box {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 20px 7px;
  padding-top: 0;
  flex-wrap: wrap;
  height: 100%;
}
.item {
  width: 110px;
  height: 170px;
  font-size: 12px;
  margin: 0 5px;
  position: relative;
}
.item .update {
  position: absolute;
  width: 110px;
  height: 25px;
  bottom: 60px;
  left: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.2),
    rgba(0, 0, 0, 0.3),
    rgba(0, 0, 0, 0.4)
  );
  color: #fff;
  line-height: 30px;
  font-size: 12px;
  text-align: center;
  border-radius: 0 0 5px 5px;
}
.img {
  width: 110px;
  height: 110px;
  display: block;
  border-radius: 5px;
}
.box p {
  font-size: 14px;
  /* text-align: center; */
  margin-top: 5px;
}
</style>
