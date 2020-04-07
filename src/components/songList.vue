<template>
  <div>
    <!-- <audio ref="audio" class="songs-play-float" controls>
      <source :src="null" />您的浏览器不支持 audio 元素。
    </audio> -->
    <div class="list" v-for="(item,index) in songList" @click="clickSongsList(item)">
      <div class="num">{{index+1}}</div>
      <div class="info">
        <p>{{item.name}}</p>
        <p>
          <span v-for="(ar,index) in item.ar">
            {{ar.name}}
            <i v-if="index <= item.ar.length-2">/</i>
          </span>
          <span>-</span>
          <span>{{item.al.name}}</span>
        </p>
      </div>
      <div v-show="item.id !== songs.songsId" class="right">
        <van-icon name="play-circle" />
      </div>
      <div v-show="item.id == songs.songsId"  class="play"></div>
    </div>
  </div>
</template>

<script>
import { mapMutations,mapState } from 'vuex'
export default {
   computed: {
    ...mapState([
      'songs'
    ])
  },
  props: {
    songList: {
      type: Array,
      required: []
    },

  },
  data() {
    return {
      list: [],
      songsId: 417859076,
    }
  },
  mounted() {

  },
  methods: {
    ...mapMutations({clickSongsList:'GET_SONGSID'})
  },
  beforeDestroy() {

  }
}
</script>

<style lang="css" scoped>
.list {
  display: flex;
  align-items: center;
  padding: 10px 0;
}
.list .num {
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 16px;
}
.list .info p:nth-child(1) {
  width: 275px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 15px;
  color: #333;
  margin-bottom: 5px;
}
.list .info p:nth-child(2) {
  width: 250px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 12px;
  color: #999;
}

.list .right {
  width: 50px;
  text-align: center;
  font-size: 22px;
}
.list .play{
  width: 30px;
  height: 30px;
  background: url('../assets/play.gif') no-repeat;
  background-size: 23px 23px;
  background-position: center center;
  margin-left: 10px;
}
</style>
