<template>
  <div class="banner">
    <div class="swiper-wrapper">
      <div v-for="(item,key) in list" :key="key" class="swiper-slide">
        <a :href="item.url">
          <img :src="item.imageUrl" alt />
        </a>
        
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from '../plugins/swiper'
export default {
  data() {
    return {
      list: [],
      swiper: null,
      options: {
        autoplay:true,
         loop: true,
        pagination: {
          el: '.swiper-pagination',
        },
        slidesPerView: 'auto',
        autoplayDisableOnInteraction: false,
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true //修改swiper的父元素时，自动初始化swiper
      },
    }
  },
  mounted() {
    this.banner()
  },
  methods: {
    banner() {
      this.$api.homeApi.banner({}, data => {
        this.list = data.banners
        setTimeout(() => {
          this.swiper = Swiper('.banner', this.options);
        }, 300)
      }, err => { })
    }
  },
  beforeDestroy() {

  }
}
</script>

<style lang="less" scoped>
.swiper-container-horizontal>.swiper-pagination-bullets, .swiper-pagination-custom, .swiper-pagination-fraction{
    bottom:0;
}
.swiper-container-horizontal>.swiper-pagination-bullet-active{
    background: red;
}
.swiper-slide img {
  display: block;
  width: 100%;
  border-radius: 5px;
}
:root {
   background: red;
}
</style>
