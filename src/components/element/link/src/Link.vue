<template>
  <a
    class="el-link"
    :class="[
      type ? `el-link--${type}` : '',
      {
        'is-underline': underline && !disabled,
        'is-disabled': disabled,
      }
    ]"
    :href="href"
  >
    <i v-if="icon" :class="icon"></i>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </a>
</template>

<script>
export default {
  name: 'ElLink',

  props: {
    href: String,
    underline: {
      type: Boolean,
      default: true,
    },
    type: String,
    disabled: Boolean,
    icon: String,
  },
};
</script>
