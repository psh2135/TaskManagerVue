<template>
  <v-container>
    <TaskInput 
      :categories="tasksStore.categories"
      :check-duplicate="checkDuplicateTask"
      @add-task="handleAddTask"
    />

    <TaskFilters 
      :categories="tasksStore.categories"
      v-model:searchQuery="tasksStore.searchQuery"
      v-model:selectedCategoryFilter="tasksStore.selectedCategoryFilter"
    />

    <TaskTable 
      :tasks-by-category="tasksStore.tasksByCategory"
      :selected-category-filter="tasksStore.selectedCategoryFilter || 'All categories'"
      :statuses="statuses"
      :categories="tasksStore.categories"
      @complete-task="handleCompleteTask"
      @delete-task="handleDeleteTask"
    />
  </v-container>
</template>

<script setup>
import { useTasksStore } from "@/stores/tasks"
import TaskInput from "./TaskInput.vue"
import TaskFilters from "./TaskFilters.vue"
import TaskTable from "./TaskTable.vue"

const tasksStore = useTasksStore()
const statuses = tasksStore.statuses
const checkDuplicateTask = (name, category) => {
  return tasksStore.tasks.some(task =>
    task.category === category &&
    task.title.trim().toLowerCase() === name.trim().toLowerCase()
  )
}

const handleAddTask = (taskData) => {
  tasksStore.addTask(taskData.title, taskData.category)
}

const handleCompleteTask = (id) => {
  tasksStore.completeTask(id)
}
const handleDeleteTask = (id) => {
  tasksStore.deleteTask(id)
}
</script>