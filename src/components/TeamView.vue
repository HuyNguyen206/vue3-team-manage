<script setup>
// import team from "@/team.json"
import TeamHeader from "@/components/partial/TeamHeader.vue";
import TeamMembers from "@/components/partial/TeamMembers.vue";
import TeamFooter from "@/components/partial/TeamFooter.vue";
import {useTeamStore} from "@/stores/TeamStore.js";

let team = useTeamStore()
team.fill()
</script>
<template>
  <div class="grid grid-cols-8 gap-2">
    <div class="col-span-1 p-4 bg-gray-300">
      <h2 class="font-semibold text-xl">Demo</h2>
      <div class="mt-4">
        <ul class="flex flex-col justify-between items-center space-y-3">
          <li class="w-20 h-20 rounded-sm bg-gray-500"></li>
          <li class="w-20 h-20 rounded-sm bg-gray-500"></li>
          <li class="w-20 h-20 rounded-sm bg-gray-500"></li>
          <li class="w-20 h-20 rounded-sm bg-gray-500"></li>
          <li class="w-20 h-20 rounded-sm bg-gray-500"></li>
        </ul>
      </div>
    </div>

    <div class="col-span-7">
      <div class="container">
        <TeamHeader :team="team"/>
        <TeamMembers :team="team"/>
        <TeamFooter :team="team"/>
        </div>
      </div>
    </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
