<template>
  <v-card class="pa-4 rounded-lg border-0 bg-transparent" elevation="0">
    <div class="text-subtitle-1 font-weight-bold mb-4 text-grey-darken-3">Filters</div>

    <v-row>
      <v-col cols="12" md="6">
        <div class="text-caption font-weight-bold mb-1 text-grey-darken-2">Search</div>
        <v-text-field
          v-model="tasksStore.searchQuery"
          placeholder="Search tasks..."
          prepend-inner-icon="mdi-magnify"
          variant="outlined"
          density="compact"
          hide-details
          color="grey-darken-1"
          class="rounded-lg rounded-input"
        ></v-text-field>
      </v-col>

      <v-col cols="12" md="6">
        <div class="text-caption font-weight-bold mb-1 text-grey-darken-2">Filter by category</div>
        <v-select
          v-model="tasksStore.selectedCategoryFilter"
          :items="categoryOptions"
          variant="outlined"
          density="compact"
          hide-details
          color="grey-darken-1"
          class="rounded-lg rounded-input"
        ></v-select>
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup>
import { computed } from 'vue'
import { useTasksStore } from '@/stores/tasks'

const tasksStore = useTasksStore()

const categoryOptions = computed(() => {
  return ["All categories", ...tasksStore.categories]
})
</script>

<style scoped>
:deep(.v-field__outline) {
  --v-field-border-radius: 8px !important;
}
</style>