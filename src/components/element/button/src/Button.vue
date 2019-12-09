<template>
  <button
    :autofocus="autofocus"
    :type="nativeType"
    @click="e => $emit('click', e)"
    class="el-button"
    :class="[
      type ? `el-button--${type}` : '',
      size ? `el-button--${size}` : '',
      {
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle,
        'is-disabled': disabled,
      }
    ]"
  >
    <i :class="icon" v-if="icon && !loading" />
    <i class="el-icon-loading" v-if="loading" />
    <span v-if="$slots.default">
      <slot></slot>
    </span>
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
    loading: Boolean,
    size: String,
    autofocus: Boolean,
    nativeType: {
      type: String,
      default: 'button',
    },
  },
};
</script>
