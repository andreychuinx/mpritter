import axios from 'axios'
import * as types from './mutation_types'

export default {
  signin(context, { email, password}) {
    return new Promise((resolve, reject) =>{
      axios.post('/signin', {
        email,
        password
      })
      .then(result =>{
        context.commit(types.SIGNIN, {
          token: result.data.data.authorization,
          user: result.data.data.user
        })
        resolve()
      })
      .catch(err =>{
        reject(err)
      })
    })
    
  },
  signup(context, {name, email, password}){
    return new Promise((resolve, reject) =>{
      axios.post('/signup', {
        name,
        email,
        password
      })
      .then(result => {
        resolve()
      })
      .catch(err =>{
        reject(err)
      })
    })
    
  },
  logout(context){
    context.commit(types.SIGNOUT)
  },
  getPosts(context){
    axios.get('/posts')
    .then(result => {
      context.commit(types.GET_POSTS, {
        data: result.data.data
      })
    })
  },
  addPost(context, { post }){
    axios.post('/posts', {
      post
    })
    .then(result => {
      context.commit(types.ADD_POST, {
        data: result.data.data
      })
    })
    .catch(err => {
      console.log(err)
    })
  },
  getTags(context, { tag }){
    axios.get(`/posts/tags/${tag}`)
    .then(result =>{
      context.commit(types.GET_TAGS, {
        data: result.data.data
      })
      console.log(result.data.data)
    })
    .catch(err => {
      console.log(err)
    })
  },
  getUserPosts(context){
    axios.get(`/posts/user/postuser`)
    .then(result => {
      context.commit(types.GET_USERPOSTS, {
        data: result.data.data
      })
    })
    .catch(err => {
      console.log(err)
    })
  },
  deletePost(context, { id }){
    axios.delete(`/posts/${id}`)
    .then(result => {
      context.commit(types.DELETE_POST, {
        data: result.data.data
      })
    })
  },
  editUser(context, { name, email, id }){
    console.log(name)
    axios.put(`/users/${id}`,{
      name,
      email
    })
    .then(result => {
      console.log(result.data.data)
      context.commit(types.EDIT_USER, {
        data: result.data.data
      })
    })
  }
}