<template>
  <header class="flex justify-between">
    <CreateTeamModal/>
    <div class="relative">
      <h2 class="font-semibold text-3xl">{{ team.name }}</h2>
      <span
          class="absolute -top-2 right-0 w-5 h-5 rounded-full bg-green-400 text-white flex items-center justify-center"
      >{{ team.spots }}</span>
    </div>
  </header>
</template>

<script setup>
import {useTeamStore} from "@/stores/TeamStore.js";
import CreateTeamModal from "@/components/partial/CreateTeamModal.vue";

let team = useTeamStore()

</script>
