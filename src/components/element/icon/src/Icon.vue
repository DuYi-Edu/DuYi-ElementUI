<template>
  <i :class="['el-icon', `el-icon-${name}`]"></i>
</template>

<script>
export default {
  name: 'ElIcon',
  props: {
    name: String,
  },
};
</script>
