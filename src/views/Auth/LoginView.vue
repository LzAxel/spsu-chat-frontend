<script setup lang="ts">
const username = ref("");
const password = ref("");
const remember = ref(false);
</script>

<template>
  <CenterLayout>
    <BaseForm title="Авторизация">
      <template #inputs>
        <BaseInput
          v-model="username"
          label="Логин"
          placeholder="Введите логин"
        />
        <BaseInput
          v-model="password"
          label="Пароль"
          placeholder="Введите пароль"
        />
        <BaseCheckbox
          class="form__checkbox"
          label="Запомнить меня"
          v-model:checked="remember"
        />
      </template>
      <template #buttons>
        <BaseButton class="form__button" text="Войти" type="success" />
      </template>
    </BaseForm>
  </CenterLayout>
</template>

<style lang="scss" scoped>
.form {
  &__button {
    width: 100%;
  }
  &__checkbox {
    align-self: flex-start;
  }
}
</style>
