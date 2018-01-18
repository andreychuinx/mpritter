<template>
<div>
  <el-menu
  :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">
    <el-menu-item index="1">Home</el-menu-item>
    
  </el-menu>
  <el-row style="padding-top: 10px;">
    <el-col>
      <el-card :body-style="{ padding: '0px' }">
        <el-row>
          <div style="padding: 14px; text-align: left;">
            <el-form-item label="Description">
              <el-input type="textarea" :autosize="{ minRows: 10}"></el-input>
            </el-form-item>
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
  <el-row style="padding-top: 10px;">
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
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

<style>

</style>
