import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useUsersStore = defineStore('Users', () => {

    const users = ref([
        { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
        { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
        { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "User" },
    ])

    const currentUser = ref(users.value[0])

    const UsersById = computed(() => {
        return users.value.reduce((acc, user) => {
            acc[user.id] = user
            return acc
        }, {})
    })
    const userByEmail = computed(() => {
        return users.value.reduce((acc, user) => {
            acc[user.email] = user
            return acc
        }, {})
    })
    function addUser(name, email, role) {
        const newId = users.value.length ? Math.max(...users.value.map(u => u.id)) + 1 : 1
        users.value.push({
            id: newId,
            name: name,
            email: email,
            role: role || "User"
        })
    }
    function login(userId) {
        const user = users.value.find(user => user.id === userId)
        if (user) {
            currentUser.value = user
        }
    }
    function logout() {
        currentUser.value = null
    }

    return {
        // State
        users,
        currentUser,

        // Getters
        UsersById,
        userByEmail,
        // Actions
        addUser,
        login,
        logout
    }
}, {
    persist: true
})