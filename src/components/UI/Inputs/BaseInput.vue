<script setup lang="ts">
const props = defineProps({
  label: {
    type: String,
  },
  placeholder: {
    type: String,
    required: false,
  },
});

const model = defineModel({
  type: String,
});
</script>

<template>
  <label class="base-input__wrapper">
    <span class="base-input__label">{{ props.label }}</span>
    <input
      v-model="model"
      :placeholder="props.placeholder"
      class="base-input__input"
    />
  </label>
</template>

<style lang="scss" scoped>
.base-input {
  &__wrapper {
    display: block;
    width: 100%;
  }
  &__label {
    display: block;
    font-size: 0.6rem;
    margin-left: 4px;
    margin-bottom: 4px;
    color: #fff;
  }

  &__input {
    border: none;
    border-radius: $border-radius;
    font-size: 0.8rem;
    padding: 10px 10px;
    padding-top: 8px;
    width: 100%;

    &::placeholder {
      color: #737373;
    }

    &:focus {
      outline: 2px solid $color--outline;
    }
  }
}
</style>
