<template>
  <v-container>
    <v-card class="task-manager">Task Manager Component</v-card>
    <v-card>
      <TaskInput :categories="categories" @add-task="addNewTask" />
      <TaskFilters :categories="categories" :statuses="statuses" />
      <TaskTable :tasks="tasks" @complete-task-table="handleCompleteTask" />
    </v-card>
  </v-container>
</template>

<script setup>
import { ref } from "vue";

import TaskInput from "./TaskInput.vue";
import TaskFilters from "./TaskFilters.vue";
import TaskTable from "./TaskTable.vue";

const categories = ref(["Work", "Personal", "Other"]);
const statuses = ref(["To Do", "In Progress", "Completed"]);

const tasks = ref([
  { id: 1, title: "Task 1", category: categories.value[0], status: statuses.value[0] },
  { id: 2, title: "Task 2", category: categories.value[1], status: statuses.value[1] },
  { id: 3, title: "Task 3", category: categories.value[2], status: statuses.value[2] },
]);
const addNewTask = (newTask) => {
  tasks.value.push(newTask);
};
const handleCompleteTask = (taskId) => {
  const foundTask = tasks.value.find(t => t.id === taskId);
  if (foundTask) {
    foundTask.status = 'Completed';
  }
};
const filter = ref("all");
</script>
