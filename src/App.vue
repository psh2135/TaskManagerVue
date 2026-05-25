<template>
  <v-app>

    <v-app-bar elevation="1" class="bg-purple-lighten-4 text-purple-darken-4">
      <v-app-bar-title class="font-weight-bold px-4">
        Task Manager
      </v-app-bar-title>

      <v-spacer></v-spacer>

      <div class="px-4">
        <UserButton />
      </div>
    </v-app-bar>

    <v-main>
      <TaskManager />
    </v-main>

  </v-app>
</template>

<script setup>
import TaskManager from "./components/TaskManager.vue";
import UserButton from "./components/auth/UserButton.vue";
</script>
