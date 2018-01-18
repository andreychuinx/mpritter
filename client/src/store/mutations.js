import * as types from './mutation_types'
import axios from 'axios'

export default {
  [types.SIGNIN](state, { token, user }){
    let dataUser = JSON.stringify(user)
    localStorage.setItem('token', token)
    localStorage.setItem('user', dataUser)
    axios.defaults.headers.common['authorization'] = token
    state.isLoggedIn = true
  },
  [types.SIGNOUT](state){
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    state.isLoggedIn = false
  },
  [types.GET_POSTS](state, { data }){
    state.posts = data
  },
  [types.ADD_POST](state, { data }){
    state.posts = [data, ...state.posts]
  },
  [types.GET_TAGS](state, { data }){
    state.tags = data
  },
  [types.GET_USERPOSTS](state, { data }){
    state.userPosts = data
  },
  [types.DELETE_POST](state, { data }){
    state.userPosts = state.userPosts.filter(post => {
      return post._id !== data._id
    })
  },
  [types.EDIT_USER](state, { data }){
    localStorage.removeItem('user')
    let newUser = {
      userId : data._id,
      name: data.name,
      email: data.email
    }
    let dataUser = JSON.stringify(newUser)
    localStorage.setItem('user', dataUser)
  }
}