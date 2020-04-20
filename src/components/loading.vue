<template>
  <div>
    <van-loading color="rgba(0,0,0,0.6)" class="loading" type="spinner" vertical size="24px" v-show="loading.loading">加载中···</van-loading>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState([
      'loading'
    ])
  },
  data() {
    return {

    }
  },

  mounted() {
  },
  methods: {

  },
  beforeDestroy() {

  }
}
</script>

<style lang="css" scoped>
.loading {
  position: fixed;
  z-index: 10000;
  height: 100%;
  width: 100%;
  justify-content: center;
  background: rgba(255,255,255,0.9);
}
</style>
