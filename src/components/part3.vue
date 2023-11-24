<template>
    <div class="container1">
        <el-row class="row1">
            <el-col :span="20">
              <div class="col1">
                <h1>Easy to Customize</h1>
                <P>The Visual Composer drag-and-drop page builder is packed with all Elated Themes. Setting up your website and creating pages full of stunning content.</P>
              </div>
            </el-col>
        </el-row>
        <el-row class="row2">
            <el-col :span="4">
              <div class="col1">
                <img class="tea" alt="tea" src="../assets/image/tea1.jpg"/>
                <h1>Flowering tea</h1>
                <el-rate v-model="value1" />
              </div>
            </el-col>
            <el-col :span="4">
              <div class="col1">
                <img class="tea" alt="tea" src="../assets/image/tea2.jpg"/>
                <h1>Flowering tea</h1>
                <el-rate v-model="value1" />
              </div>
            </el-col>
            <el-col :span="4">
              <div class="col1">
                <img class="tea" alt="tea" src="../assets/image/tea3.jpg"/>
                <h1>Flowering tea</h1>
                <el-rate v-model="value1" />
              </div>
            </el-col>
            <el-col :span="4">
              <div class="col1">
                <img class="tea" alt="tea" src="../assets/image/tea4.jpg"/>
                <h1>Flowering tea</h1>
                <el-rate v-model="value1" />
              </div>
            </el-col>
        </el-row>
        <el-row class="row3">
            <el-col :span="4">
              <div class="col1">
                <img class="tea" alt="tea" src="../assets/image/tea5.jpg"/>
                <h1>Flowering tea</h1>
                <el-rate v-model="value1" />
              </div>
            </el-col>
            <el-col :span="4">
              <div class="col1">
                <img class="tea" alt="tea" src="../assets/image/tea6.jpg"/>
                <h1>Flowering tea</h1>
                <el-rate v-model="value1" />
              </div>
            </el-col>
            <el-col :span="4">
              <div class="col1">
                <img class="tea" alt="tea" src="../assets/image/tea7.jpg"/>
                <h1>Flowering tea</h1>
                <el-rate v-model="value1" />
              </div>
            </el-col>
            <el-col :span="4">
              <div class="col1">
                <img class="tea" alt="tea" src="../assets/image/tea8.jpg"/>
                <h1>Flowering tea</h1>
                <el-rate v-model="value1" />
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
  }
  .row1{
    justify-content: center;
    align-items: center;
  }
  .tea{
    max-width: 100%;
  }
  </style>