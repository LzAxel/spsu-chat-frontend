<script setup lang="ts">
const props = defineProps({
  required: {
    type: Boolean,
    default: false,
  },
  for: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <label class="text-xs" :for="props.for">
    <slot /><span class="text-red-600 pl-0.5" v-if="props.required">*</span>
  </label>
</template>

<style scoped></style>
