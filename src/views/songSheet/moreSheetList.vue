<template>
  <div class="container">
    <van-nav-bar
      title="村西头杂货铺"
      :fixed="true"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
    />

    <songs-sheet-list :tags="cat" :length="20" />
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
</style>