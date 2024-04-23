<script setup lang="ts">
import { PropType } from "vue";

const props = defineProps({
  text: {
    type: String,
  },
  type: {
    type: String as PropType<"base" | "success" | "danger">,
    default: "base",
  },
});
</script>

<template>
  <button class="base-button" :class="`base-button--${props.type}`">
    {{ props.text }}
  </button>
</template>

<style lang="scss" scoped>
.base-button {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 35px;
  padding: 0 30px;
  border-radius: $border-radius;
  border: none;
  cursor: pointer;
  font-size: 0.8rem;

  &:focus {
    outline: 2px solid $color--outline;
  }

  &--base {
    background: #fff;
    color: #555555;
  }

  &--success {
    background: $color--success;
    color: #fff;
  }

  &--danger {
    background: $color--danger;
    color: #fff;
  }
}
</style>
