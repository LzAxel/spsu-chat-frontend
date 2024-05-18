<script setup lang="ts">
import "primeicons/primeicons.css";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <i :class="['pi', `pi-${props.name}`]"></i>
</template>

<style lang="scss" scoped></style>
