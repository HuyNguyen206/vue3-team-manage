<script setup>
defineProps({
  name: String,
  email: String,
  status: {
    type: Boolean,
    default: true
  }
})
</script>

<template>
  <div class="name col-span-3 flex flex-col space-y-2">
    <div class="bg-gray-200 p-2 float-left">
      <h3 class="font-semibold text-xl">{{name}}</h3>
    </div>
  </div>
  <div class="email col-span-2 flex flex-col space-y-2">
    <div class="bg-gray-200 p-2 float-left">
      <h3 class="font-semibold text-xl">{{email}}</h3>
    </div>
  </div>
  <div class="status col-span-1 flex flex-col space-y-2">
    <div class="bg-gray-200 p-2 float-left">
      <h3 v-if="status" class="font-semibold text-xl text-green-700">Active</h3>
      <h3 v-else class="font-semibold text-xl text-red-400">InActive</h3>
    </div>
  </div>
</template>
