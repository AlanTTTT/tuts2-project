<template>
    <div class="container1">
        <el-row class="row1">
            <el-col :span="4">
              <div class="col1">
                <h1>Stunning Full Screen Slider</h1>
                <P>The Visual Composer drag-and-drop page builder is packed with all Elated Themes. Setting up your website and creating pages.</P>
              </div>
              <div class="col2">
                <h1>Smooth Parallax Effect</h1>
                <P>The Elated Slider comes with video and image support, as well as full screen and parallax functionality. Display your content.</P>
              </div>
              <div class="col3">
                <h1>WooCommerce Compatible</h1>
                <P>Elated Themes provide a large collection of elements and shortcodes. Create any layout combination you can imagine and.</P>
              </div>
            </el-col>
            <el-col :span="4">
                <img src="../assets/tea.png" alt="tea" class="tea"/>
            </el-col>
            <el-col :span="4">
              <div class="col4">
                <h1>Simple Demo Import</h1>
                <P>The Elated Slider comes with video and image support, as well as full screen and parallax functionality that comes in style.</P>
              </div>
              <div class="col5">
                <h1>Infographic Elements</h1>
                <P>The Visual Composer drag-and-drop page builder is packed with all Elated Themes. Setting up your website has never been.</P>
              </div>
              <div class="col6">
                <h1>Retina Ready</h1>
                <P>The Elated Slider comes with video and image support, as well as full screen and parallax functionality display your main.</P>
              </div>
            </el-col>
        </el-row>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HelloWorld2',
    props: {
      msg: String
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
    .tea{
      color: blue;
    }
  }
  .tea{
    max-width: 100%;
  }
  </style>