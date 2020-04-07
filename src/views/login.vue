<template>
  <div class="content">
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin-top: 40px;">
        <van-button round block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import {
    Toast
} from 'vant';
import { getToken, setToken, removeToken } from '../plugins/token'
export default {
  data() {
    return {
      username: '',
      password: '',
    }
  },
  mounted() {
  },
  methods: {
    onSubmit(value) {
      this.$api.homeApi.login({ phone: this.username, password: this.password }, data => {
          setToken('token','MUSIC_U='+data.token)
          this.$router.push({ path: "/home" });
      }, err => {
          Toast('账号或密码错误')
      })
    }
  },
  beforeDestroy() {
  }
}
</script>

<style lang="less" scoped>
.content{
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 10000;
    top: 0;
    left: 0;
    padding: 150px 15px 0 15px;
    background: url('../assets/timg.jpg') no-repeat center;
    background-size: cover;
    box-sizing: border-box;
}
</style>
