<script setup lang="ts">
import api from "../../api"

const username = ref("");
const password = ref("");
const displayName = ref("");

const onRegister = async () => {
  const response = await api.auth.register({
    username: username.value,
    password: password.value,
    display_name: displayName.value
  })

  if (response?.message) {
    console.log(response.message)

    message.value = response.message
  }
}

const message = ref("")

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
          @click.prevent="onRegister"
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
