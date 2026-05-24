<template>
    <v-container>
	<v-card class="task-table">Task Table Component</v-card>
    <taskRow/>
    </v-container>
</template>

<script>
    import TaskRow from './TaskRow.vue'

export default {
	name: 'TaskTable',
    setup(props){
     
        return {
           
        }
    },
    components() {
        TaskRow
    }
}

</script>

<style scoped>

</style>
