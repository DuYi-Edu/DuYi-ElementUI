<template>
  <div id="app">
    <el-link>主要链接</el-link>
  </div>
</template>

<script>

export default {
  name: 'app',
  methods: {
    handleClick(e) {
      console.log(e);
    },
  },
};
</script>

<style>
  .el-button-group {
    margin-right: 10px;
  }
</style>
