<script setup lang="ts">
import { useAuthStore } from "@/stores/useAuthStore";
import { requiredField } from "../../validation/index";
import useForm from "../../composables/useForm";

const formData = ref({
  username: "",
  password: "",
});

const rules = computed(() => ({
  username: {
    required: requiredField,
  },
  password: {
    required: requiredField,
  },
}));

const form = useForm<typeof formData.value>(formData, rules);

async function login() {
  await form.submit(async () => {
    await useAuthStore().login(
      formData.value.username,
      formData.value.password
    );
  });
}
</script>

<template>
  <CenterLayout>
    <div
      class="flex flex-col gap-3 w-full max-w-[350px] bg-white bg-opacity-40 rounded-lg p-3"
    >
      <SpinLogo class="mb-3" />
      <FormField
        label="Имя пользователя"
        :error-message="form.validation.username"
        required
      >
        <BaseInput
          v-model="formData.username"
          placeholder="Введите имя пользователя"
        />
      </FormField>
      <FormField
        label="Пароль"
        :error-message="form.validation.password"
        required
      >
        <BaseInput
          v-model="formData.password"
          placeholder="Введите пароль"
          type="password"
        />
      </FormField>

      <div class="flex flex-col gap-2 mt-3">
        <BaseButton
          :is-loading="form.processing"
          right-icon="chevron-right"
          @click="login"
          >Войти</BaseButton
        >
        <BaseButton as="router-link" :to="{ name: 'RegisterPage' }" type="text"
          >Создать аккаунт</BaseButton
        >
      </div>
    </div>
  </CenterLayout>
</template>
