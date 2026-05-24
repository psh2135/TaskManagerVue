<template>
  <v-container>
    <v-card class="task-table">Task Table Component</v-card>

    <template v-for="task in tasks" :key="task.id">
      <TaskRow :task="task" @complete-task="forwardComplete" />
    </template>
  </v-container>
</template>

<script setup>
import TaskRow from "./TaskRow.vue";

const props = defineProps({
  tasks: {
    type: Array,
    required: true
  }
});

// הגדרת ה-emit של ה-Table כלפי האבא (TaskManager)
const emit = defineEmits(['complete-task-table']);

// פונקציה שמקבלת את ה-ID מה-Row ומעבירה אותו הלאה למעלה
const forwardComplete = (taskId) => {
  emit('complete-task-table', taskId);
};
</script>

<style scoped></style>