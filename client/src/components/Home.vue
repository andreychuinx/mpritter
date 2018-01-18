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
  <el-row style="padding: 10px;">
    <el-col>
      <el-card :body-style="{ padding: '0px' }">
        <el-row>
          <div style="padding: 14px; text-align: left;">
            <span>Nama User</span>
            <div class="bottom clearfix">
              <el-button type="text" class="button">Operating button</el-button>
            </div>
          </div>
        </el-row>
        <el-row>
          <div style=" padding-bottom: 10px; padding-right:10px; text-align: right;">
            TEST
          </div>
        </el-row>
      
    </el-card>
    </el-col>
  </el-row>
  
</div>
  
</template>

<script>
export default {
  data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        post: '',
        alertPost: ''
      };
    },
    methods: {
      addPost(){
        if(this.post.length == 140){
          this.$message({
            message: 'Post Character gk boleh dari 140',
            type: 'error',
          })
        }else{
          // this.$store.dispatch('addPost', {

          // })
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
