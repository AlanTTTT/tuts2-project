<template>
    <div class="container1">
      <el-row class="row1">
            <el-col :span="4">
              <div class="col1">
              <img key="tea" alt="tea1" src="../assets/image/tea-home-counter1-1.png" />
              <span>
                <div id="1" ref="element">Initial Value</div>
              </span>
              <p>Icon Collections</p>
              </div>
            </el-col>
            <el-col :span="4">
              <div class="col1">
              <img key="tea" alt="tea1" src="../assets/image/tea-home-counter2.png" />
              <span>
                <div id="1" ref="element">Initial Value</div>
              </span>
              <p>Masonry Layouts</p>
              </div>
            </el-col>
            <el-col :span="4">
              <div class="col1">
              <img key="tea" alt="tea1" src="../assets/image/tea-home-counter3.png" />
              <span>
                <div id="1" ref="element">Initial Value</div>
              </span>
              <p>Only The Best</p>
              </div>
            </el-col>
            <el-col :span="4">
              <div class="col1">
              <img key="tea" alt="tea1" src="../assets/image/tea-home-counter4.png" />
              <span>
                <div id="1" ref="element">Initial Value</div>
              </span>
              <p>Elated Design</p>
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
    background-color: unset !important;
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