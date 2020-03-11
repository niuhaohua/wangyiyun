<template>
  <div>
    <van-tabbar v-model="active" @change="onChange" active-color="#ee0a24" :z-index= 10001>
      <van-tabbar-item name="list" icon="bullhorn-o">村口</van-tabbar-item>
      <van-tabbar-item name="songSheet" icon="shop-o">杂货铺</van-tabbar-item>
      <van-tabbar-item name="buy" icon="friends-o">购物车</van-tabbar-item>
      <van-tabbar-item name="my" icon="setting-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 'list'
    }
  },
  watch: {
    $route: {
      handler: function (val, oldVal) {
        this.active = val.meta.partersName
      },
      deep: true
    }
  },
  mounted() {
    this.active = this.$route.meta.partersName
  },
  methods: {
    onChange(a) {
      this.$router.push({ path: '/' + a })
    },
  },
  beforeDestroy() {

  }
}
</script>

<style lang="less" scoped>
</style>
