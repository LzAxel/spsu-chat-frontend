<script setup lang="ts">
import { v4 } from "uuid";

const props = defineProps({
  id: {
    type: String,
    default: () => `input-${v4()}`,
  },
  required: {
    type: Boolean,
    default: false,
  },
  invalid: {
    type: Boolean,
    required: false,
  },
});

const model = defineModel({
  type: String,
});
const field = inject("field", props);
</script>

<template>
  <input
    :id="field.id"
    :required="field.required"
    v-model="model"
    :class="[
      'base-input__input',
      field.invalid && 'base-input__input--invalid',
    ]"
  />
</template>

<style lang="scss" scoped>
.base-input {
  &__input {
    border: none;
    border-radius: $border-radius;
    font-size: 0.8rem;
    padding: 10px 10px 8px 10px;
    padding-top: 8px;
    width: 100%;

    &::placeholder {
      color: #737373;
    }

    &:focus {
      outline: 2px solid $color--outline;
    }

    &--invalid {
      border: 1px solid $color--danger;
    }
  }
}
</style>
