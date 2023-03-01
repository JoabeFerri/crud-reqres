<template>
  <div v-if="isLoading" class="loader">
    <div class="loader-inner"></div>
  </div>
</template>

<script>
export default {
  name: 'Loader',
  props: {
    isLoading: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style>
.loader {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #FFFFFF;
  z-index: 9999;
}

.loader-inner {
  border: 6px solid #f3f3f3;
  border-top: 6px solid #000000;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
