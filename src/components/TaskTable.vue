<template>
  <v-container>
    <div
      v-for="(tasksInCat, categoryName) in tasksStore.tasksByCategory"
      :key="categoryName"
      class="mb-6"
    >
      <h3 class="text-h6 font-weight-bold mb-2 text-primary d-flex align-center">
        <v-icon icon="mdi-folder-outline" class="me-2" size="small"></v-icon>
        {{ categoryName }}
        <v-chip size="x-small" class="ms-2" variant="tonal">
          {{ tasksInCat.length }} tasks
        </v-chip>
      </h3>

      <div v-if="tasksInCat.length > 0">
        <div v-for="task in tasksInCat" :key="task.id">
          <TaskRow :task="task" />
        </div>
      </div>

      <div v-else class="text-caption text-grey italic ps-6 py-2">
       There are no tasks in this category.
      </div>
    </div>
  </v-container>
</template>
<script setup>
import { useTasksStore } from "@/stores/tasks";
import TaskRow from "./TaskRow.vue";

const tasksStore = useTasksStore();
</script>

<style scoped></style>
