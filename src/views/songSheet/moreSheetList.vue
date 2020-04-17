<template>
  <div class="container">
    <van-nav-bar
      title="歌单列表"
      :fixed="true"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
    />
<div class="box">
    <songs-sheet-list :tags="cat" :length="20" />
</div>
  </div>
</template>

<script>
import SongsSheetList from '../../components/songSheetList'
export default {
  components: {
    SongsSheetList
  },
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      cat: ''
    }
  },
  mounted() {
    this.cat = this.$route.query.tag
  },
  methods: {
    onClickLeft() {
      this.$router.back()
    },
  },
  beforeDestroy() {

  }
}
</script>

<style lang="css" scoped>
.container {
  padding: 50px 0;
  padding-top: 46px;
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
</style>