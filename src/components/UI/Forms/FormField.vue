<script setup lang="ts">
import { v4 } from "uuid";

const props = defineProps({
  id: {
    type: String,
    default: `field-${v4()}`,
  },
  label: {
    type: String,
    required: true,
  },
  errorMessage: {
    type: String,
    required: false,
  },
  required: {
    type: Boolean,
    default: false,
  },
});
provide(
  "field",
  computed(() => ({
    ...props,
    invalid: !!props.errorMessage,
  }))
);
</script>

<template>
  <div class="flex flex-col gap-0.5 relative">
    <BaseLabel class="ml-1" :for="props.id" :required="props.required">{{
      props.label
    }}</BaseLabel>
    <slot />
    <ErrorMessage class="ml-1" v-if="props.errorMessage">{{
      props.errorMessage
    }}</ErrorMessage>
  </div>
</template>

<style scoped></style>
