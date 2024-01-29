<template>
  <div class="modal" v-if="showModal">
    <div class="modal-background" @click="closeModal"></div>
    <div class="modal-content">
      <slot></slot>
    </div>
    <button class="modal-close" @click="closeModal"></button>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    showModal: Boolean,
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>

<style>
.modal {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-background {
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 110%;
  background-color: #00000040;
  z-index: 0;
}

.modal-content {
  background-color: white;
  padding: 16px;
  border-radius: 0.25rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  max-width: 80%;
  max-height: 80%;
  overflow-y: auto;
  z-index: 1;
  display: flex;
  flex-direction: column;
}

.users-p {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 50px;
  line-height: 61px;
  /* identical to box height */
  letter-spacing: 0.2px;
  color: #000000;
}

.modal-close {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  border: none;
  background-color: transparent;
  color: white;
  font-size: 2rem;
  cursor: pointer;
}
</style>
