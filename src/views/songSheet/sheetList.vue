
<template>
  <div class="container">
    <van-nav-bar title="歌单列表" :fixed="true" />
    <Tags-Nav class="tags" @cat="getCat" @popShow="popShow"></Tags-Nav>
    <div class="box">
      <songs-sheet-list :tags="cat" :length="100" />
    </div>
    <Popup :show="show" @cat="getCat" @closePopShow="closePopShow" />
  </div>
</template>

<script>
import TagsNav from './tagsNav'
import Popup from './popup'
import SongsSheetList from '../../components/songSheetList'
export default {
  components: {
    TagsNav,
    SongsSheetList,
    Popup
  },
  data() {
    return {
      show: false,
      cat: ''
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
    closePopShow(flag) {
      this.show = flag
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
  height: 100%;
  overflow: scroll;
}

.tags {
  position: fixed;
  top: 44px;
  width: 100%;
}
</style>
