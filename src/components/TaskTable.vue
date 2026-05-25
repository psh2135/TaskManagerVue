<template>
  <v-container>
    <v-card class="elevation-1 rounded-lg">
      <v-card-title class="text-h6 font-weight-bold pa-4">
        Tasks
      </v-card-title>

      <v-table>
        <TransitionGroup 
          v-for="(tasksInCat, categoryName) in tasksStore.tasksByCategory" 
          :key="categoryName"
          name="task-list" 
          tag="tbody"
        >
          <tr :key="`cat-${categoryName}`" class="bg-purple-lighten-5 font-weight-bold">
            <td colspan="4" class="text-subtitle-2 text-deep-purple-darken-2">
              <v-icon icon="mdi-folder-outline" class="me-2" size="small"></v-icon>
              <span class="text-capitalize">{{ categoryName }}</span>
              <span class="text-grey text-caption ms-1">({{ tasksInCat.length }} tasks)</span>
            </td>
          </tr>

          <template v-if="tasksInCat.length > 0">
            <TaskRow 
              v-for="task in tasksInCat" 
              :key="task.id" 
              :task="task"
            />
          </template>

          <tr :key="`empty-${categoryName}`" v-else>
            <td colspan="4" class="text-caption text-grey text-center py-4 font-italic">
              There are no tasks in this category.
            </td>
          </tr>
        </TransitionGroup>
      </v-table>
    </v-card>
  </v-container>
</template>

<script setup>
import { useTasksStore } from "@/stores/tasks";
import TaskRow from "./TaskRow.vue";

const tasksStore = useTasksStore();
</script>

<style scoped>
.task-list-enter-active,
.task-list-leave-active,
.task-list-move {
  transition: all 0.4s ease;
}

.task-list-enter-from,
.task-list-leave-to {
  opacity: 0;
  transform: translateX(20px);
}

.task-list-leave-active {
  position: absolute;
  width: 100%;
}
</style>