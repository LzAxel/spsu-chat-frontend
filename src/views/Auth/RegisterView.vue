<script setup lang="ts">
const username = ref("");
const password = ref("");
const displayName = ref("");
</script>

<template>
  <CenterLayout>
    <BaseForm title="Регистрация">
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
        <BaseInput
          v-model="displayName"
          label="Отображаемое имя"
          placeholder="Введите имя"
        />
      </template>
      <template #buttons>
        <BaseButton
          class="form__button"
          text="Зарегистрироваться"
          type="success"
        />
      </template>
    </BaseForm>
  </CenterLayout>
</template>

<style lang="scss" scoped>
.form {
  &__button {
    width: 100%;
  }
}
</style>
