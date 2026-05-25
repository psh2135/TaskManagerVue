<template>
  <div v-if="usersStore.currentUser" class="d-flex align-center ga-3">
    <span class="text-body-2 font-weight-medium text-purple-darken-4">
      Hello, {{ usersStore.currentUser.name }}
    </span>

    <v-btn
      color="error"
      variant="text"
      size="small"
      prepend-icon="mdi-logout"
      class="text-capitalize font-weight-bold"
      @click="usersStore.logout()"
    >
      Logout
    </v-btn>
  </div>

  <div v-else class="d-flex align-center">
    <v-btn
      color="primary"
      variant="flat"
      size="small"
      prepend-icon="mdi-account-circle-outline"
      class="text-capitalize font-weight-bold rounded-lg"
      @click="isAuthDialogOpen = true"
    >
      Sign In / Register
    </v-btn>
  </div>

  <AuthDialog v-model="isAuthDialogOpen" />
</template>

<script setup>
import { ref } from 'vue'
import { useUsersStore } from '@/stores/users'
import AuthDialog from './AuthDialog.vue' 

const usersStore = useUsersStore()
const isAuthDialogOpen = ref(false)
</script>