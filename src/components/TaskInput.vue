<template>
  <v-container fluid class="pa-4">
    <v-card class="pa-4 rounded-lg" elevation="1">
      <v-row align="center" no-gutters class="ga-3">
        
        <v-col cols="12" sm="4">
          <v-text-field
            v-model="taskName"
            label="שם המשימה"
            variant="outlined"
            density="compact"
            hide-details
            prepend-inner-icon="mdi-playlist-plus"
            color="primary"
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="4">
          <v-select
            v-model="selectedCategory"
            label="קטגוריה"
            :items="categories"
            variant="outlined"
            density="compact"
            hide-details
            prepend-inner-icon="mdi-format-list-bulleted"
            color="primary"
          ></v-select>
        </v-col>

        <v-col cols="12" sm="auto" class="d-flex align-center">
          <v-btn
            variant="flat"
            color="primary"
            height="40"
            class="font-weight-bold px-6"
            :disabled="!taskName.trim() || !selectedCategory"
            @click="submitTask"
          >
           Add
          </v-btn>
        </v-col>

      </v-row>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  categories: {
    type: Array,
    required: true
  }
});

const emit = defineEmits(['add-task']);

const taskName = ref('');
const selectedCategory = ref(null);

const submitTask = () => {
  if (taskName.value.trim() && selectedCategory.value) {
    
    emit('add-task', {
      id: Date.now(),                   
      title: taskName.value,             
      category: selectedCategory.value,   
      status: 'To Do'                     
    });

    taskName.value = '';
    selectedCategory.value = null;
  }
};
</script>

<style scoped>
</style>