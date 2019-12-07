<template>
  <button
    class="el-button"
    :class="[
      type ? `el-button--${type}` : '',
      {
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle,
        'is-disabled': disabled,
      }
    ]"
  >
    <i :class="icon" v-if="icon" />
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'ElButton',

  props: {
    type: String,
    plain: Boolean,
    round: Boolean,
    circle: Boolean,
    icon: String,
    disabled: Boolean,
  },
};
</script>
