<template>
<div>
  <el-row style="padding: 10px;">
    <el-col>
      <el-card :body-style="{ padding: '0px' }">
        <el-row>
          <div style="padding: 14px; text-align: left;">
             <el-form ref="form" >
               <el-form-item>
                <el-input type="textarea" v-model="post" :autosize="{ minRows: 4}"></el-input>
                <el-button type="primary" @click="addPost">Post</el-button>
                <el-button>Cancel</el-button>
                <span style="color: red;">{{alertPost}}</span>
              </el-form-item>
              
                
             </el-form>
          </div>
        </el-row>
      
    </el-card>
    </el-col>
  </el-row>
  <el-row style="padding: 10px;" v-for="post in posts" :key="post._id">
    <el-col>
      <el-card :body-style="{ padding: '0px' }">
        <el-row>
          <div style="padding: 14px; text-align: left;">
            <h3>{{post.userId.name}}</h3>
            <div class="bottom clearfix">
              {{post.post}}
            </div>
          </div>
        </el-row>
        <el-row>
          <div style=" padding-bottom: 10px; padding-right:10px; text-align: right;">
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
        alertPost: ''
      };
    },
    computed: {
      ...mapState(['isLoggedIn', 'posts'])
    },
    mounted() {
      this.$store.dispatch('getPosts')
    },
    methods: {
      addPost(){
        if(this.post.length > 140){
          this.$message({
            message: 'Post Character gk boleh dari 140',
            type: 'error',
          })
        }else{
          this.$store.dispatch('addPost', {
            post: this.post
          })
          .then(()=>{
            this.post = ''
            this.$message({
              message: 'Post Berhasil',
              type: 'success'
            })
          })
        }
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
