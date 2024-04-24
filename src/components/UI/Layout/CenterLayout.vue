<template>
  <div class="center-layout">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.center-layout {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100dvh;
  height: 100%;
}
</style>
