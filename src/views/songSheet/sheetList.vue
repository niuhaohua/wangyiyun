
<template>
  <div class="container">
    <van-nav-bar title="村西头杂货铺" :fixed="true" />
    <Tags-Nav class="tags" @cat="getCat" @popShow="popShow"></Tags-Nav>
    <div class="box">
      <songs-sheet-list :tags="cat" :length="20" />
    </div>

    <van-popup
      closeable
      close-icon-position="top-right"
      round
      v-model="show"
      position="top"
      :style="{ height: 'auto' }"
    >
      <div v-for="item in tagList" :style="{ fontSize:'0' ,padding: '14px'}">
        <van-divider
          :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }"
        >{{item.name}}</van-divider>
        <van-tag
          class="tag"
          v-for="tag in item.child"
          type="warning"
          size="large"
          @click="tagClick(tag.name)"
        >{{tag.name}}</van-tag>
      </div>
    </van-popup>
  </div>
</template>

<script>
import TagsNav from './tagsNav'
import SongsSheetList from '../../components/songSheetList'
export default {
  components: {
    TagsNav,
    SongsSheetList
  },
  data() {
    return {
      show: false,
      cat: '',
      tagList: [{
        name: '情感',
        child: [{
          name: '怀旧'
        },
        {
          name: '清新'
        },
        {
          name: '浪漫'
        },
        {
          name: '伤感'
        },
        {
          name: '治愈'
        },
        {
          name: '放松'
        },
        {
          name: '孤独'
        },
        {
          name: '感动'
        }]
      },
      {
        name: '主题',
        child: [{
          name: 'ACG'
        },
        {
          name: '儿童'
        },
        {
          name: '校园'
        },
        {
          name: '游戏'
        },
        {
          name: '70后'
        },

        {
          name: '90后'
        },
        {
          name: '经典'
        },
        {
          name: '翻唱'
        }]
      }]
    }
  },
  mounted() {

  },
  methods: {
    getCat(cat) {
      window.scrollTo(0, 0);
      this.cat = cat
    },
    popShow(flag) {
      this.show = flag
    },
    tagClick(tag) {
      this.$router.push({ path: '/songSheet/moreSheetList', query: { tag: tag } })
    }
  },
  beforeDestroy() {
  }
}
</script>

<style lang="css" scoped>
.container {
  padding: 50px 0;
  padding-top: 90px;
  word-break: break-all;
  position: relative;
}
.box {
  padding: 20px 7px;
  display: flex;
  flex-wrap: wrap;
  /* align-content:space-around; */
  justify-content: flex-start;
}
.item {
  /* width: 23%; */
  width: 110px;
  height: 170px;
  font-size: 12px;
  margin: 0 5px;
}
.tags {
  position: fixed;
  top: 44px;
  width: 100%;
}
.img {
  width: 110px;
  height: 115px;
  display: block;
}
.tag {
  font-size: 16px;
  border-radius: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
}
</style>
