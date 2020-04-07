<template>
  <div>
    <Loading />
    <songs-play-float/>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" />
    </keep-alive>
    <navigation>
    <router-view v-if="!$route.meta.keepAlive" />
    </navigation>
  </div>
</template>

<script>
import Loading from '@/components/loading'
import SongsPlayFloat from '@/components/songsPlayFloat'
export default {
  components: {
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
