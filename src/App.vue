<template>
  <v-app-bar-nav-icon text="">
    {{ myName }}
  </v-app-bar-nav-icon>
 <v-card>
    <TaskManager />
  </v-card>
</template>

<script>
  import TaskManager from "./components/TaskManager.vue";
  export default {
    components: {
      TaskManager
    },
    setup() {
      const myName = 'pnini'
      return {
        myName
      }
    }
  }
</script>
