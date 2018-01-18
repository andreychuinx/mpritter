import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/components/Home'
import login from '@/components/Login'
import signup from '@/components/Register'
import tagPage from '@/components/Tags'
import account from '@/components/Account'

Vue.use(Router)
Vue.use(Vuex)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: home,
    },
    {
      path: '/login',
      name: 'loginPage',
      component: login
    },
    {
      path: '/signup',
      name: 'signupPage',
      component: signup
    },
    {
      path: '/tags',
      name: 'tagsPage',
      props: true,
      component: tagPage
    },
    {
      path: '/account',
      name: 'accountPage',
      component: account
    }
  ]
})
