<template>
<div>
  <el-menu
  :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">
    <router-link :to="{name: 'homePage'}">
      <el-menu-item index="1">Home</el-menu-item>
    </router-link>
    
    <router-link :to="{name: 'loginPage'}" v-if="!isLoggedIn">
      <el-menu-item index="2">Login</el-menu-item>
    </router-link>
    <router-link :to="{name: 'signupPage'}" v-if="!isLoggedIn">
      <el-menu-item index="3">Signup</el-menu-item>
    </router-link>
    <el-menu-item index="4">
      Logout
    </el-menu-item>
    
  </el-menu>
</div>
  
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  computed: {
    ...mapState(['isLoggedIn'])
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    },
  }
}
</script>

<style>

</style>
