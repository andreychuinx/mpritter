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
}