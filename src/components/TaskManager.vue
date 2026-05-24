<template>

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
