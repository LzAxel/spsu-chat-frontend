<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
  },
});
</script>

<template>
  <form class="base-form">
    <div class="base-form__duck">
      <img
        src="@/assets/icons/duck.svg"
        alt="duck"
        class="base-form__duck-img"
      />
    </div>
    <div class="base-form__wrapper">
      <p class="base-form__title">{{ props.title }}</p>
      <div class="base-form__inputs">
        <slot name="inputs" />
      </div>
      <div class="base-form__buttons">
        <slot name="buttons" />
      </div>
    </div>
  </form>
</template>

<style lang="scss" scoped>
.base-form {
  display: grid;
  grid-template-columns: 3fr 4fr;
  padding: 30px;
  border-radius: 8px;
  background: rgba(0, 82, 91, 0.4);
  column-gap: 40px;

  max-width: 700px;
  width: 100%;

  &__duck {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__duck-img {
    height: auto;
    max-width: 250px;
    width: 100%;
  }

  &__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 40px;
  }

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
