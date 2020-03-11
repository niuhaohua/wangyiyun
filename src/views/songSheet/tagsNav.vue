<template>
  <div>
    <div class="tagBox">
      <div class="listBox">
        <van-tabs @click="onClick" sticky>
          <van-tab v-for="item in navs" :title="item.name"></van-tab>
        </van-tabs>
      </div>
      <div class="mask"></div>
      <div @click="showPopup" class="more">
        <van-icon name="weapp-nav" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navs: []
    }
  },
  mounted() {
    this.$api.homeApi.songsSheetTags({}, res => {
      this.navs = res.tags
      this.$emit('cat', this.navs[0].name)
    }, err => {
      console.log(err)
    })
  },
  methods: {
    onClick(name, title) {
      this.$emit('cat', title)
    },
    showPopup() {
      this.$emit('popShow', true)
    }
  },
  beforeDestroy() {

  }
}
</script>

<style lang="css" scoped>
.tagBox {
  display: flex;
}
.listBox {
  width: calc(100% - 44px);
}
.mask {
  position: absolute;
  right: 44px;
  width: 30px;
  height: 44px;
  background: #fff;
  opacity: 0.6;
  /* background: linear-gradient(to right,rgba(225,225,225,1),rgba(225,225,225,1)) */
}
.more {
  position: absolute;
  background: #fff;
  right: 0;
  width: 44px;
  height: 44px;
  font-size: 16px;
  line-height: 47px;
  text-align: center;
}
</style>
