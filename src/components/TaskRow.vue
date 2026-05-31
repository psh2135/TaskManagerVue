<template>
  <tr :class="{ 'bg-green-lighten-5': task.status === 'Completed' }">
    
    <td class="py-3">
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
    </td>

    <td class="text-end" style="width: 120px;">
      <div class="d-flex justify-end align-center ga-2">
        <v-btn
          :icon="task.status === 'Completed' ? 'mdi-check-circle' : 'mdi-circle-outline'"
          variant="text"
          size="small"
          :color="task.status === 'Completed' ? 'success' : 'grey'"
          @click="emit('completeTask', task.id)"
        ></v-btn>

        <v-btn
          icon="mdi-delete-outline"
          variant="text"
          size="small"
          color="error"
          @click="emit('deleteTask', task.id)"
        ></v-btn>
      </div>
    </td>
  </tr>
</template>

<script setup>
const props = defineProps({
  task: {
    type: Object,
    required: true
  },
  statuses:{
    type: Array,
    required: true
  }
})

const emit = defineEmits(['completeTask', 'deleteTask'])

const getStatusColor = (status) => {
  switch (status) {
    case props.statuses[0]:
      return 'blue-darken-1'
    case props.statuses[1]:
      return 'orange-darken-1'
    case props.statuses[2]:
      return 'success'
    default:
      return 'grey'
  }
}
</script>