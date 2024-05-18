<script setup lang="ts">
import { PropType } from "vue";

const props = defineProps({
  text: {
    type: String,
  },
  type: {
    type: String as PropType<
      "primary" | "secondary" | "success" | "danger" | "text"
    >,
    default: "primary",
  },
  leftIcon: {
    type: String,
  },
  rightIcon: {
    type: String,
  },
  isLoading: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  as: {
    type: String,
    default: "button",
  },
});
</script>

<template>
  <component
    :is="props.as"
    class="base-button"
    :class="[
      `base-button--${props.type}`,
      props.disabled && 'base-button--disabled',
    ]"
    :disabled="props.disabled"
  >
    <svg
      v-if="props.isLoading"
      class="animate-spin h-5 w-5 absolute"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        class="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      ></circle>
      <path
        class="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>

    <MaterialIcon
      v-if="props.leftIcon"
      class="text-xs"
      :class="{ invisible: props.isLoading }"
      :name="props.leftIcon"
    />
    <span :class="{ invisible: props.isLoading }">
      <slot />
    </span>
    <MaterialIcon
      v-if="props.rightIcon"
      class="text-xs"
      :class="{ invisible: props.isLoading }"
      :name="props.rightIcon"
    />
  </component>
</template>

<style lang="scss" scoped>
.base-button {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  column-gap: 5px;
  height: 33px;
  padding: 0 30px;
  border-radius: $border-radius;
  border: none;
  cursor: pointer;
  font-size: 14px;
  line-height: 1;
  transition: ease-in-out 0.1s;

  &__icon {
    font-size: 18px;
  }

  &:focus {
    outline: 2px solid $color--outline;
  }

  &--disabled {
    cursor: not-allowed;
    background: #e0e0e0 !important;
    color: #555555 !important;
  }

  &--primary {
    background: #fff;
    color: #555555;

    &:hover {
      background: #f5f5f5;
    }
  }

  &--secondary {
    background: $color--secondary;
    color: #fff;

    &:hover {
      background: $color--secondary-hover;
    }
  }

  &--success {
    background: $color--success;
    color: #fff;
    &:hover {
      background: $color--success-hover;
    }
  }

  &--danger {
    background: $color--danger;
    color: #fff;
    &:hover {
      background: $color--danger-hover;
    }
  }

  &--text {
    color: #555555;

    &:hover {
      background: #f5f5f548;
    }
  }
}
</style>
