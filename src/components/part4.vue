<template>
    <div class="container1">
      <el-row class="row1">
            <el-col :span="4">
              <div class="col1">
              </div>
            </el-col>
        </el-row>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue'
  export default {
    name: 'HelloWorld2',
    setup() {
      const value1 = ref(null)
      const value2 = ref(null)
      const colors = ref(['#99A9BF', '#F7BA2A', '#FF9900'])
    return {
      value1,
      value2,
      colors,
    };
  }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  .container1{
    background-color: #f7f5f2 !important;
    .row1{
      justify-content: center;
      align-items: center;
    }
    .row2{
      justify-content: center;
      .title{
        font-size: 20px;
        color: black;
      }
    }
    .row3{
      justify-content: center;
      .title{
        font-size: 20px;
        color: black;
      }
    }
  }
  .tea{
    max-width: 100%;
  }
  </style>