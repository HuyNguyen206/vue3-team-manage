<template>
  <button @click.prevent="showModal = true" :disabled="team.members.length === team.spots"
          :class="{
                    'bg-green-700 text-white': !team.isFullTeam,
                    'bg-gray-300 text-white': team.isFullTeam
                   }"
          class="px-4 py-2 rounded-sm">
    Add member ({{team.remainingSpots}} spots left)
  </button>

  <Teleport to="body">
    <Modal :show="showModal">
      <template #header>
        Create a new member for team
      </template>
      <div class="flex flex-col space-y-2">
        <div>
          <label for="">Name
            <input type="text" v-model="member.name" class="border border-gray-500">
          </label>
        </div>
        <div>
          <label for="">Email
            <input type="email" v-model="member.email" class="border border-gray-500">
          </label>
        </div>

        <div>
          <label for="">Status
            <input type="checkbox" v-model="member.status">
          </label>
        </div>
      </div>

      <template #footer>
        <button @click.prevent="addMember" class="px-4 py-2 rounded-full bg-green-600 text-white">
          Add member
        </button>
        <button class="px-4 py-2 rounded-full bg-gray-600 text-white" @click.prevent="showModal = false">Close</button>
      </template>
    </Modal>
  </Teleport>
</template>

<script setup>
import Modal from "@/components/partial/Modal.vue";
import {useTeamStore} from "@/stores/TeamStore.js";
import {reactive, ref} from "vue";

let showModal = ref(false);
let member = reactive({name:'', email:'', status: false})
let team = useTeamStore()

let addMember = function (){
  team.addNewMember({...member})
  member.name = ''
  member.email = ''
  member.status = false
  showModal.value = false
}
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