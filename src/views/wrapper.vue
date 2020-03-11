<template>
  <div>
    <Tabbar />
    <Loading />
    <songs-play-float/>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" />
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" />
  </div>
</template>

<script>
import Tabbar from '@/components/Tabbar'
import Loading from '@/components/loading'
import SongsPlayFloat from '@/components/songsPlayFloat'
export default {
  components: {
    Tabbar,
    Loading,
    SongsPlayFloat
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

<style lang="less" scoped>
</style>
