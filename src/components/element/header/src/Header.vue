<template>
  <div class="el-header" :style="{height}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ElHeader',
  props: {
    height: {
      type: String,
      default: '60px',
    },
  },
};
</script>
