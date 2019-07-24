<template>
  <div class="el-aside" :style="{width}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ElAside',
  props: {
    width: {
      type: String,
      default: '300px',
    },
  },
};
</script>
