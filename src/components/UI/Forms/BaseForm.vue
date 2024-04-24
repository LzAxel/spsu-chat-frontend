<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
  },
});
</script>

<template>
  <form class="base-form">
    <p class="base-form__title">{{ props.title }}</p>
    <div class="base-form__inputs">
      <slot name="inputs" />
    </div>
    <div class="base-form__buttons">
      <slot name="buttons" />
    </div>
  </form>
</template>

<style lang="scss" scoped>
.base-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
  border-radius: 8px;
  background: rgba(0, 82, 91, 0.4);
  row-gap: 40px;
  max-width: 400px;
  width: 100%;

  &__title {
    font-size: 1.8rem;
    text-align: center;
    color: #fff;
  }

  &__inputs {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    row-gap: 23px;
    width: 100%;
  }

  &__buttons {
    width: 100%;
  }
}
</style>
