<script setup lang="ts">
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  fill: {
    type: Boolean,
    default: false,
  },
  weight: {
    type: Number as PropType<100 | 200 | 300 | 400 | 500 | 600 | 700>,
    default: 300,
  },
});
</script>

<template>
  <span
    class="material-symbols-outlined"
    :class="[
      `material-symbols-outlined--${props.fill ? 'fill' : 'outline'}`,
      `material-symbols-outlined--weight-${props.weight}`,
    ]"
  >
    {{ props.name }}
  </span>
</template>

<style lang="scss" scoped>
.material-symbols-outlined {
  font-family: "Material Symbols Outlined";
  user-select: none;
  &--fill {
    font-variation-settings: "FILL" 1;
  }
  &--outline {
    font-variation-settings: "FILL" 0;
  }
  &--weight-100 {
    font-variation-settings: "wght" 100;
  }
  &--weight-200 {
    font-variation-settings: "wght" 200;
  }
  &--weight-300 {
    font-variation-settings: "wght" 300;
  }
  &--weight-400 {
    font-variation-settings: "wght" 400;
  }
  &--weight-500 {
    font-variation-settings: "wght" 500;
  }
  &--weight-600 {
    font-variation-settings: "wght" 600;
  }
  &--weight-700 {
    font-variation-settings: "wght" 700;
  }
}
</style>
