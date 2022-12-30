<template>
  <div class="members px-20 mt-20 grid grid-cols-6 gap-2">

    <div class="col-span-3">
      <h3 class="font-semibold text-xl">Name</h3>
    </div>
    <div class="col-span-2">
      <h3 class="font-semibold text-xl">Email</h3>
    </div>
    <div class="col-span-1">
      <h3 class="font-semibold text-xl">Status</h3>
    </div>

    <Person v-for="member in team.members" :key="member.id" :name="member.name" :email="member.email"
            :status="member.status"/>
    <p class="text-right italic mt-2 col-span-6" v-show="team.isFullTeam">There are no remaining team spots. Upgrade to add more</p>
  </div>
</template>

<script setup>
import Person from "@/components/partial/TeamPerson.vue";
import {useTeamStore} from "@/stores/TeamStore.js";

let team = useTeamStore()
</script>

<style scoped>

</style>