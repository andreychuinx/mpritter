<template>
<div>
  <el-row style="padding: 10px;">
    <el-col>
      <el-card :body-style="{ padding: '0px' }">
        <el-row>
          <div style="padding: 14px; text-align: left;" v-if="!editStatus">
             Nama : {{user.name}}<br/>
             Email: {{user.email}}<br />
             <el-button type="warning" size="mini" @click="editStatus = true">
               Edit
             </el-button>
          </div>
          <el-row style="padding: 10px;" v-else>
            <el-col>
              <el-card :body-style="{ padding: '0px' }">
                <el-row>
                  <div style="padding: 14px; text-align: left;">
                    <el-form ref="form" >
                      <el-form-item label="Name">
                        <el-input type="text" v-model="user.name"></el-input>
                      </el-form-item>
                      <el-form-item label="Email">
                        <el-input type="text" v-model="user.email"></el-input>
                      </el-form-item>
                      <el-button type="primary" @click="updateUser">Update</el-button>
                        <el-button type="success" @click="editStatus = false">Cancel</el-button>
                      
                      
                        
                    </el-form>
                  </div>
                </el-row>
              
            </el-card>
            </el-col>
          </el-row>
        </el-row>
      
    </el-card>
    </el-col>
  </el-row>
  <el-row style="padding: 10px;" v-for="post in userPosts" :key="post._id">
    <el-col>
      <el-card :body-style="{ padding: '0px' }">
        <el-row>
          <div style="padding: 14px; text-align: left;">
            <h3>{{post.userId.name}}</h3>
            <div class="bottom clearfix">
              {{post.post}}
            </div><br />
            <div >
              <p style="margin-bottom: 0px;">Tags :</p>
              <span v-for="(tag, idx) in tags(post.post)" :key="idx" style="padding-top: 0px;">
                <router-link :to="`/tags/?tag=${tag}`">
                  <el-button type="text">#{{tag}}</el-button>
                
                </router-link>
              </span>
              
            </div>
          </div>
        </el-row>
        <el-row>
          <div style=" padding-bottom: 10px; padding-right:10px; text-align: right;">
            <el-button type="danger" size="mini" @click="deletePost(post)" > Delete</el-button>
            {{post.createdAt}}
            
          </div>
        </el-row>
      
    </el-card>
    </el-col>
  </el-row>
  
</div>
  
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        post: '',
        alertPost: '',
        user : {},
        editStatus: false
      };
    },
    computed: {
      ...mapState(['isLoggedIn', 'userPosts'])
    },
    mounted() {
      this.$store.dispatch('getUserPosts')
      let userada = JSON.parse(localStorage.getItem('user'))
      this.user = {
        name: userada.name,
        email: userada.email,
        id: userada.userId
      }      
    },
    methods: {
      updateUser(){
        this.$store.dispatch('editUser', {
          name: this.user.name,
          email: this.user.email,
          id: this.user.id
        })
        .then(() =>{
          this.$message({
            message: 'Update Berhasil',
            type: 'success'
          })
          this.editStatus = false
        })
      },
      tags(post){
        let arrTag = []
        post.split(' ').forEach(tag =>{
          if(tag[0]=='#'){
            let string = tag.split('')
            string.shift()
            string.join('')
            arrTag.push(string.join(''))
          }
        })
        return arrTag
      },
      deletePost(post){
        this.$store.dispatch('deletePost', {
          id : post._id
        })
        .then(()=>{
          this.$message({
              message: 'Delete Berhasil',
              type: 'success'
            })
        })
      }
    },
    watch: {
      post(){
        if(this.post.length > 140){
          this.alertPost = 'Tulisan Lebih dari 140'
        }else{
          this.alertPost = ''
        }
      }
    }
}
</script>

<style>

</style>
