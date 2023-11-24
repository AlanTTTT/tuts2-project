<template>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      :ellipsis="false"
      @select="handleSelect"
    >
      <el-menu-item index="0">
        <img
          style="width: 100px"
          src="../assets/brandLogo.png"
          alt="Natural"
        />
      </el-menu-item>
      <div class="flex-grow" />
      <el-menu-item index="1">Home</el-menu-item>
      <el-menu-item index="2">About</el-menu-item>
      <el-menu-item index="3">Team</el-menu-item>
      <el-menu-item index="4">Work</el-menu-item>
      <el-menu-item index="5">Contact</el-menu-item>
    </el-menu>
  </template>
  
  <script>
import { ref } from 'vue';

export default {
  setup() {
    const activeIndex = ref('1');
    
    const handleSelect = (key, keyPath) => {
      console.log(key, keyPath);
    };

    return {
      activeIndex,
      handleSelect
    };
  }
};
  </script>
  
  <style>
  .flex-grow {
    flex-grow: 1;
  }
  </style>
  