<template>
  <div class="app-container">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.app-container {
  min-height: 100dvh;
  background: linear-gradient(237deg, #a8eb12, #00cdff);
  background-size: 400% 400%;

  -webkit-animation: AnimationName 27s ease infinite;
  animation: AnimationName 27s ease infinite;
  padding: 0 10px;
}
@-webkit-keyframes AnimationName {
  0% {
    background-position: 0% 40%;
  }
  50% {
    background-position: 100% 61%;
  }
  100% {
    background-position: 0% 40%;
  }
}
@keyframes AnimationName {
  0% {
    background-position: 0% 40%;
  }
  50% {
    background-position: 100% 61%;
  }
  100% {
    background-position: 0% 40%;
  }
}
</style>
