<template>
<div>
  <el-row style="padding: 10px;">
    <el-col>
      <el-card :body-style="{ padding: '0px' }">
        <el-row>
          <div style="padding: 14px; text-align: left;">
             <el-form ref="form" >
               <el-form-item label="Email">
                 <el-input type="text" v-model="email"></el-input>
               </el-form-item>
               <el-form-item label="Password">
                 <el-input type="password" v-model="password"></el-input>
               </el-form-item>
              <el-button type="primary" @click="signin">Login</el-button>
              <router-link :to="{name: 'signupPage'}">
                <el-button type="success">Register</el-button>
              </router-link>
              
              
                
             </el-form>
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
        email: '',
        password: ''
      };
    },
    methods: {
      signin(){
        if(this.email !== '' && this.password !== ''){
          this.$store.dispatch('signin',{
            email: this.email,
            password: this.password
          })
          .then(()=>{
            this.$message({
              message: 'Login Berhasil',
              type: 'success'
            })
            this.$router.push({name: 'homePage'})
          })
        }else{
          this.$message({
            message: 'Isi dulu email dan password',
            type: 'error'
          })
        }
        
      }
    }
}
</script>

<style>

</style>
