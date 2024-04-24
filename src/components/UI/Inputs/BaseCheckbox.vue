<script setup lang="ts">
const props = defineProps({
  label: {
    type: String,
    required: false,
  },
  checked: {
    type: Boolean,
    default: false,
  },
});

const emits = defineEmits(["update:checked"]);

function onChange(event: Event) {
  const target = event.target as HTMLInputElement;
  emits("update:checked", target.checked);
}
</script>

<template>
  <label class="check">
    <input
      type="checkbox"
      class="check__input"
      :checked="props.checked"
      @change="onChange"
    />
    <span class="check__box">
      <MaterialIcon name="done" class="check__icon" />
    </span>
    <span class="check__label">
      {{ props.label }}
    </span>
  </label>
</template>

<style lang="scss" scoped>
.check {
  position: relative;

  &__input {
    width: 0;
    height: 0;
    appearance: none;

    &:checked + .check__box {
      background: $color--success;
      border: 1px solid #fff;
    }
  }
  &__box {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 20px;
    height: 20px;
    background: #fff;
    border-radius: $border-radius;
    transform: translateY(-43%);
    top: 50%;
    left: 0;
  }
  &__icon {
    font-size: 20px;
    color: #fff;
  }
  &__label {
    color: #fff;
    font-size: 0.8rem;
    padding-left: 20px;
  }
}
</style>
