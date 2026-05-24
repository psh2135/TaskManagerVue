<template>
  <v-container>
    <v-card class="task-manager">Task Manager Component</v-card>
    <v-card>
      <TaskInput />
      <TaskFilters />
      <TaskTable />
    </v-card>
  </v-container>
</template>

<script>
import TaskInput from "./TaskInput.vue";
import TaskFilters from "./TaskFilters.vue";
import TaskTable from "./TaskTable.vue";
export default {
  name: "TaskManager",
  setup(props) {
	
  },
  components(){
    TaskInput,
    TaskFilters,
    TaskTable,
  },
}
</script>

<style scoped></style>
