<script setup lang="ts">
import { useAuthStore } from "@/stores/useAuthStore";
import { requiredField, repeatPasswordField } from "../../validation/index";
import useForm from "../../composables/useForm";

const formData = ref({
  username: "",
  displayName: "",
  password: "",
  passwordCheck: "",
});

const rules = computed(() => ({
  displayName: {
    required: requiredField,
  },
  username: {
    required: requiredField,
  },
  password: {
    required: requiredField,
  },
  passwordCheck: {
    sameAs: repeatPasswordField(formData.value.password),
  },
}));

const form = useForm<typeof formData.value>(formData, rules);

async function register() {
  await form.submit(async () => {
    useAuthStore().register(
      formData.value.username,
      formData.value.password,
      formData.value.displayName
    );
  });
}
</script>

<template>
  <CenterLayout>
    <div
      class="flex flex-col gap-2 w-full max-w-[350px] bg-white bg-opacity-40 rounded-lg p-3"
    >
      <SpinLogo class="mb-3" />
      <FormField
        label="Никнейм"
        required
        :error-message="form.validation.username"
      >
        <BaseInput v-model="formData.username" placeholder="Введите никнейм" />
      </FormField>
      <FormField
        label="Отображаемое имя"
        required
        :error-message="form.validation.displayName"
      >
        <BaseInput
          v-model="formData.displayName"
          placeholder="Введите отображаемое имя"
        />
      </FormField>
      <FormField
        label="Пароль"
        required
        :error-message="form.validation.password"
      >
        <BaseInput
          v-model="formData.password"
          placeholder="Введите пароль"
          type="password"
        />
      </FormField>
      <FormField
        label="Повторите пароль"
        required
        :error-message="form.validation.passwordCheck"
      >
        <BaseInput
          v-model="formData.passwordCheck"
          placeholder="Введите повтор пароля"
          type="password"
        />
      </FormField>
      <div class="flex flex-col gap-2 mt-3">
        <BaseButton
          :is-loading="form.processing"
          @click="register"
          right-icon="chevron-right"
          >Зарегистрироваться</BaseButton
        >
        <BaseButton as="router-link" :to="{ name: 'LoginPage' }" type="text"
          >Войти в аккаунт</BaseButton
        >
      </div>
    </div>
  </CenterLayout>
</template>
