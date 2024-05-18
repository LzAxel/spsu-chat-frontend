import useVuelidate from "@vuelidate/core";
import { Validation } from "@vuelidate/core";

export default function useForm<T extends Record<string, any>>(
  fields: Ref<T>,
  rules: ComputedRef<Record<keyof T, any>>
) {
  const v$ = useVuelidate(rules, fields);

  const validation = computed<Record<keyof T, string>>(() => {
    return parseVuelidateErrors<T>(v$.value, fields.value);
  });

  return reactive({
    fields,
    validation: validation,
    processing: false,
    error: null,

    async submit(submitter: (fields: T) => Promise<void>) {
      if (this.processing) return;

      const isValid = await v$.value.$validate();
      if (!isValid) return;

      this.processing = true;
      try {
        await submitter(this.fields.value);
      } catch (error) {
        this.error = error as any;
      }
      this.processing = false;
    },
  });
}

function parseVuelidateErrors<T extends Record<string, any>>(
  v$: Validation<any, T>,
  fields: T
): Record<keyof T, string> {
  const result = {} as Record<keyof T, string>;
  for (const [key, _] of Object.entries(fields)) {
    if (v$[key].$errors.length < 1) continue;
    result[key as keyof T] = v$[key].$errors[0].$message as string;
  }
  return result;
}
