<template>
  <div>
    <div ref="onload" class="box">
      <div class="item" v-for="item in list">
        <a class="a" :href="item.coverImgUrl" :download="item.coverImgUrl"></a>
        <img class="img" v-lazy="item.coverImgUrl" />
        <p>{{item.name}}</p>
      </div>
    </div>
    <button @click="down">下载</button>
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
      cat: '',
      list: [],
      currentPage: 1,
      offset: 0
    }
  },
  watch: {
    tags(newVal, oldVal) {
      this.cat = newVal
      this.songsSheetList(this.cat, true)
    }
  },
  mounted() {
    window.addEventListener('scroll', this.scrollToTop)
  },
  methods: {
    songsSheetList(cat, flag) {
      if(flag){
        this.offset = 0
      }
      this.$api.homeApi.songsSheetList({
        limit: this.length,
        offset: this.offset * this.length,
        cat: cat,
      }, res => {
        this.offset++
        if (flag) {
          this.list = []
          this.list = res.playlists
        } else {
          this.list = [...this.list, ...res.playlists]
        }

      }, err => {

      })
    },
    scrollToTop(el) {
      let h = window.innerHeight
      let sh = document.documentElement.scrollTop || document.body.scrollTop
      let t = document.documentElement.scrollHeight
      if (sh + h >= t) {
        this.songsSheetList(this.cat, false)
      }
    },
    detail(item) {
      this.$router.push({ path: '/songSheet/sheetDetail', query: { sheetId: item.id } })
    },
    down(){
      let list  = document.querySelectorAll('a')
      for(let item of list){
        console.log(item)
        item.click()
      }
    }
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.scrollToTop)
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
  height: 110px;
  display: block;
  border-radius: 5px;
}
</style>
