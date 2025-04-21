<template>
  <div>
    <div v-show="isShow">
      <el-input v-model="email" placeholder="输入email"></el-input>
      <el-input v-model="password" type="password" placeholder="输入password"></el-input>
      <el-button type="primary" @click="handleLogin">登录</el-button>
    </div>
    <div  v-show="!isShow">
       <p>登录成功</p>
      <el-button type="primary" @click="handleLogout">登出</el-button>
    </div>
  
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import { GetBaseInfo, GetCsrfCookie, Login, GetApiUser, Logout } from './axios/api.js'
const email = ref('test@example.com')
const password = ref('password')
const isShow = ref(true)
onMounted(() => {
  getBaseInfo()
  getCsrfCookie()
})
const getBaseInfo = () => {
  const baseInfo = GetBaseInfo()
  console.log('baseInfo', baseInfo)
}
const getCsrfCookie = () => {
  const cookie = GetCsrfCookie()
  console.log('cookie', cookie)
}

const handleLogin = () => {
  let param = {
    email: email.value,
    password: password.value
  }
  const login = Login(param)
  console.log('login', login)
  const userInfo = GetApiUser()
  console.log('userInfo', userInfo)
  isShow.value = false
}
const handleLogout = () => {
  Logout()
  isShow.value = true
}
</script>

<style scoped></style>
