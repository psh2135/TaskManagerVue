<template>
  <!-- <v-app-bar-nav-icon text="Task Manager" class="elevation-1 rounded-lg mb-4 px-4 py-3 bg-gradient-to-r from-purple-lighten-4 to-purple-lighten-2" />

    
<v-stepper-header class="elevation-1 rounded-lg mb-4 px-4 py-3 bg-gradient-to-r from-purple-lighten-4 to-purple-lighten-2">
  <v-stepper-step :complete="true" step="1">
    
    Task Manager
  </v-stepper-step>
</v-stepper-header> -->

  <v-container>
    <TaskInput />
    <TaskFilters />
    <TaskTable />
  </v-container>
</template>

<script setup>
import TaskInput from "./TaskInput.vue";
import TaskFilters from "./TaskFilters.vue";
import TaskTable from "./TaskTable.vue";
</script>
