import { helpers, required, sameAs } from "@vuelidate/validators";

export const requiredField = helpers.withMessage("Поле обязательно", required);
export const repeatPasswordField = (value: string) =>
  helpers.withMessage("Пароль не совпадает", sameAs(value));
