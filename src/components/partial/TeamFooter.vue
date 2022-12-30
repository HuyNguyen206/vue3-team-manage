<template>
  <div class="bg-gray-200 text-center py-2 font-semibold mt-10">{{ team.name }} - {{ team.spots }} members team</div>
</template>

<script setup>

import {useTeamStore} from "@/stores/TeamStore.js";

let team = useTeamStore()
</script>

<style scoped>

</style>