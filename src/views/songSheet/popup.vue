<template>
  <div>
    <van-popup round v-model="show" position="top" :style="{ height: 'auto' }">
      <div v-for="(item,index) in list.categories" :style="{ fontSize:'0' ,padding: '0 14px'}">
        <van-divider
          :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }"
        >{{item}}</van-divider>
        <van-tag
          class="tag"
          v-for="tag in list.sub"
          type="warning"
          size="large"
          v-if="tag.category == index"
          @click="tagClick(tag.name)"
        >{{tag.name}}</van-tag>
      </div>
      <div class="close" @click="close">×</div>
    </van-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
    }
  },
  props: {
    show: {
      type: Boolean,
      required: false
    }
  },
  mounted() {
    this.getMoreCat()
  },
  methods: {
    getMoreCat() {
      this.$api.homeApi.catlist({}, res => {
        console.log(res)
        this.list = res
      }, err => {
        console.log(err)
      })
    },

    tagClick(tag) {
      this.$emit('closePopShow', false)
      this.$nextTick(() => {
        this.$router.push({ path: '/songSheet/moreSheetList', query: { tag: tag } })
      })

    },
    close() {
      this.$emit('closePopShow', false)
    }
  },
  beforeDestroy() {

  }
}
</script>

<style lang="css" scoped>
.tag {
  font-size: 14px;
  border-radius: 20px;
  margin-right: 15px;
  margin-bottom: 10px;
  color: #bfbfbf;
  background-color: rgba(0, 0, 0, 0.8);
}
.close {
  position: fixed;
  font-size: 20px;
  color: #000;
  top: 10px;
  right: 10px;
  z-index: 1;
}
</style>
