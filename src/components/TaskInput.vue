<template>
  <v-container fluid class="pa-4">
    <v-form ref="taskForm" @submit.prevent="submitTask">
      <v-card class="pa-4 rounded-lg" elevation="1">
        <v-row align="start" no-gutters class="ga-3">
          
          <v-col cols="12" sm="4">
            <v-text-field
              v-model="taskName"
              label="Task Name"
              variant="outlined"
              density="compact"
              prepend-inner-icon="mdi-playlist-plus"
              color="primary"
              :rules="nameRules"
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="4">
            <v-select
              v-model="selectedCategory"
              label="Category"
              :items="tasksStore.categories"
              variant="outlined"
              density="compact"
              prepend-inner-icon="mdi-format-list-bulleted"
              color="primary"
              :rules="categoryRules"
            ></v-select>
          </v-col>

          <v-col cols="12" sm="auto" class="pt-1">
            <v-btn
              type="submit"
              variant="flat"
              color="primary"
              height="40"
              class="font-weight-bold px-6"
            >
              Add
            </v-btn>
          </v-col>

        </v-row>
      </v-card>
    </v-form>
  </v-container>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useTasksStore } from '@/stores/tasks' 

const tasksStore = useTasksStore()

const taskForm = ref(null)
const taskName = ref('')
const selectedCategory = ref(null)

const isDuplicateTask = (name) => {
  if (!selectedCategory.value || !name) return false
  
  return tasksStore.tasks.some(task => 
    task.category === selectedCategory.value && 
    task.title.trim().toLowerCase() === name.trim().toLowerCase()
  )
}

const nameRules = [
  v => !!v || 'Task name is required',
  v => (v && v.trim().length >= 3) || 'Task name must be at least 3 characters',
  v => !isDuplicateTask(v) || 'A task with this name already exists in this category'
]

const categoryRules = [
  v => !!v || 'Please select a category'
]

watch(selectedCategory, () => {
  if (taskName.value) {
    taskForm.value.validate()
  }
})

const submitTask = async () => {
  const { valid } = await taskForm.value.validate()
  
  if (valid) {
    tasksStore.addTask(taskName.value.trim(), selectedCategory.value)
    taskForm.value.reset()
  }
}
</script>

<style scoped>
</style>