export default {
  isLoggedIn : localStorage.getItem('token') !== null ? true : false,
  posts : []
}