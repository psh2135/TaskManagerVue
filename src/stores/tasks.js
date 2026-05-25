import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useTasksStore = defineStore('tasks', () => {

  const categories = ref(["Work", "Personal", "Other"])
  const statuses = ref(["To Do", "In Progress", "Completed"])

  const tasks = ref([
    { id: 1, title: "Task 1", category: "Work", status: "To Do" },
    { id: 2, title: "Task 2", category: "Personal", status: "In Progress" },
    { id: 3, title: "Task 3", category: "Other", status: "Completed" },
  ])

  const currentFilter = ref("All")
  const searchQuery = ref("")
  const selectedCategoryFilter = ref("All categories")

  const filteredTasks = computed(() => {
    return tasks.value.filter(task => {
      const matchesStatus = currentFilter.value === "All" ||
        task.status === currentFilter.value

      const matchesCategory = selectedCategoryFilter.value === "All categories" ||
        task.category === selectedCategoryFilter.value

      const matchesSearch = task.title.toLowerCase().includes(searchQuery.value.toLowerCase())

      return matchesStatus && matchesCategory && matchesSearch
    })
  })

  const tasksByCategory = computed(() => {
    const grouped = {}

    categories.value.forEach(category => {
      grouped[category] = []
    })

    filteredTasks.value.forEach(task => {
      if (grouped[task.category]) {
        grouped[task.category].push(task)
      } else {
        grouped[task.category] = [task]
      }
    })

    return grouped
  })

  function addTask(title, category) {
    const newId = tasks.value.length ? Math.max(...tasks.value.map(t => t.id)) + 1 : 1
    tasks.value.push({
      id: newId,
      title: title,
      category: category || categories.value[0],
      status: "To Do"
    })
  }

  function deleteTask(id) {
    tasks.value = tasks.value.filter(task => task.id !== id)
  }


  function updateTaskStatus(id, newStatus) {
    const task = tasks.value.find(task => task.id === id)
    if (task) {
      task.status = newStatus
    }
  }

  return {
    // State
    categories,
    statuses,
    tasks,
    currentFilter,
    searchQuery,
    selectedCategoryFilter,

    // Getters
    filteredTasks,
    tasksByCategory,

    // Actions
    addTask,
    deleteTask,
    updateTaskStatus
  }
}, {
  persist: true
})