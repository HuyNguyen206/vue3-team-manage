<template>
  <Transition
      name="modal"
  >
    <div class="mask fixed flex items-center w-screen h-screen" v-show="show">
      <div class="modal bg-white mx-auto p-4">
        <header class="p-2 font-semibold text-2xl">
          <slot name="header">
            Default header
          </slot>
        </header>
        <hr>
        <main class="p-2">
          <slot>
            Default body
          </slot>
        </main>
        <footer class="p-2 flex space-x-3">
          <slot name="footer">
          </slot>
        </footer>
      </div>
    </div>

  </Transition>
</template>

<script setup>
defineProps({
  show: Boolean
})
</script>

<style>
.modal-enter-from, .modal-leave-to {
  @apply opacity-0
}
.modal-enter-to, .modal-leave-from {
  @apply opacity-100
}
.modal-enter-active, .modal-leave-active {
  @apply transition duration-300
}

.mask{
  background-color: rgba(0, 0, 0, .6);
  inset: 0;
}
.modal {
  width: 80vw;
  max-width: 500px;
}
</style>