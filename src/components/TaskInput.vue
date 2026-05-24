<template>
  <v-container>
    <v-text-field label="Task Name"></v-text-field>
    <v-select label="" items=""> </v-select>
    <v-btn variant="tonal">Add Task</v-btn>
  </v-container>
</template>

<script>
export default {
  name: "TaskInput",
};
</script>

<style scoped></style>
