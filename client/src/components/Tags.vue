<template>
<div>
  <el-row style="padding: 10px;" v-for="post in tags" :key="post._id">
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
              <span v-for="(tag, idx) in tagsGrouping(post.post)" :key="idx" style="padding-top: 0px;">
                <router-link :to="`/tags/?tag=${tag}`">
                  <el-button type="text">#{{tag}}</el-button>
                
                </router-link>
              </span>
              
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
      ...mapState(['isLoggedIn', 'tags'])
    },
    mounted() {
      this.$store.dispatch('getTags', {
        tag : this.$route.query.tag
      })
    },
    methods: {
      tagsGrouping(post){
        let arrTag = []
        // let manipulationTag = post.split(' ').filter(tag => {
        //   if(tag[0] == '#'){
        //     return tag
        //   }
        // })
        post.split(' ').forEach(tag =>{
          if(tag[0]=='#'){
            let string = tag.split('')
            string.shift()
            string.join('')
            // console.log(string.join(''), 'ada')
            arrTag.push(string.join(''))
          }
        })
        // console.log(arrTag)
        return arrTag
      },
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
