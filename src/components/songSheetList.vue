<template>
  <div>
    <div ref="onload" class="box">
      
      <div class="item" v-for="item in list" @click="detail(item)">
        <img class="img" v-lazy="item.coverImgUrl" />
        <p>{{item.name}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tags: {
      type: String,
      required: ''
    },
    length: {
      type: Number,
      required: 20
    }
  },
  data() {
    return {
      list: [],
      currentPage: 1,
    }
  },
  watch: {
    tags(newVal, oldVal) {
      this.songsSheetList(newVal, true)
    }
  },
  mounted() {
    window.addEventListener('scroll', this.scrollToTop)
  },
  methods: {
    songsSheetList(cat, flag) {
      this.list = []
      this.$api.homeApi.songsSheetList({
        order: 'hot',
        limit: this.length,
        cat: cat
      }, res => {
        flag ? this.list = res.playlists : this.list = this.list.concat(res.playlists)
      }, err => {
        console.log(err)
      })
    },
    scrollToTop(el) {
      console.log(el)
    },
    detail(item) {
      this.$router.push({ path: '/songSheet/sheetDetail', query: { sheetId: item.id } })
    }
  },
  beforeDestroy() {

  }
}
</script>

<style lang="css" scoped>
.box {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.item {
  width: 110px;
  height: 170px;
  font-size: 12px;
  margin: 0 5px;
}
.img {
  width: 110px;
  height: 115px;
  display: block;
  border-radius: 5px;
}
</style>
