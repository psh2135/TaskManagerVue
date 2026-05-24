<template>
  <v-card
    :class="[
      'mb-3 pa-3 rounded-lg border-s-xl elevation-1',
      task.status === 'Completed' ? 'border-success' : 'border-primary',
    ]"
  >
    <v-row align="center" no-gutters>
      <v-col>
        <div class="text-subtitle-1 font-weight-bold">
          {{ task.title }}
        </div>

        <v-chip
          size="x-small"
          :color="getStatusColor(task.status)"
          variant="flat"
          class="mt-1 font-weight-bold text-uppercase"
        >
          {{ task.status }}
        </v-chip>
      </v-col>

      <v-col cols="auto" class="d-flex align-center ga-2">
        <v-btn
          :icon="task.status === 'Completed' ? 'mdi-check-circle' : 'mdi-circle-outline'"
          variant="text"
          size="small"
          :color="task.status === 'Completed' ? 'success' : 'grey'"
          @click="emitComplete"
        ></v-btn>

        <v-btn
          icon="mdi-delete-outline"
          variant="text"
          size="small"
          color="error"
        ></v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup>
const props = defineProps({
  task: {
    type: Object,
    required: true
  }
});

const emit = defineEmits(['complete-task']);

const emitComplete = () => {
  emit('complete-task', props.task.id);
};

const getStatusColor = (status) => {
  switch (status) {
    case 'To Do':
      return 'blue-darken-1';
    case 'In Progress':
      return 'orange-darken-1';
    case 'Completed':
      return 'success';
    default:
      return 'grey';
  }
};
</script>