<template>
  <div :class="[dom,'swiper1']">
    <div class="swiper-wrapper">
      <div v-for="(item,key) in list" :key="key" class="swiper-slide" @click="detail(item)">
        <img v-lazy="item.picUrl ||item.coverImgUrl" alt />
        <p>{{item.name}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from '../plugins/swiper'
export default {
  data() {
    return {
      swiper: null,
      options: {
        slidesPerView: 'auto',
        autoplayDisableOnInteraction: false,
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true //修改swiper的父元素时，自动初始化swiper
      },
    }
  },
  props: {
    dom: {
      type: String,
      required: ''
    },
    list: {
      type: Array,
      required: []
    }
  },
  watch: {
    list: {
      handler(newName, oldName) {
        this.list = newName
        this.$nextTick(() => {
          this.initSwiper()
        })
      },
      deep: true,
      immediate: true
    }
  },
  mounted() {
  },
  methods: {
    initSwiper() {
      setTimeout(() => {
        this.swiper = Swiper('.' + this.dom, this.options);
      }, 300)

    },
    detail(item){
        this.$router.push({ path: '/songSheet/sheetDetail', query: { sheetId: item.id } })
    }
  },
  beforeDestroy() {

  }
}
</script>

<style lang="less" scoped>
.swiper-slide {
  width: 90px;
  margin-right: 10px;
}
.swiper-slide img {
  display: block;
  width: 90px;
  border-radius: 10px;
  margin: 0 auto;
}
.swiper-slide p {
  width: 90px;
  margin: 0 auto;
  margin-top: 5px;
  font-size: 12px;
  height: 33px;
  overflow: hidden;
}
</style>
