<template>
  <v-dialog :model-value="modelValue" @update:model-value="$emit('update:modelValue', $v)" max-width="450px" persistent>
    <v-card class="rounded-lg">
      
      <v-tabs v-model="activeTab" bg-color="purple-lighten-5" color="deep-purple" grow>
        <v-tab value="login">
          <v-icon icon="mdi-login" class="me-2"></v-icon>
          Login
        </v-tab>
        <v-tab value="register">
          <v-icon icon="mdi-account-plus" class="me-2"></v-icon>
          Sign Up
        </v-tab>
      </v-tabs>

      <v-card-text class="pt-4">
        <v-window v-model="activeTab">
          
          <v-window-item value="login">
            <div class="text-subtitle-2 text-grey mb-4">Select a user to log in:</div>
            <v-select
              v-model="selectedUserId"
              :items="usersStore.users"
              item-title="name"
              item-value="id"
              label="Choose User"
              variant="outlined"
              density="compact"
              prepend-inner-icon="mdi-account-circle-outline"
            ></v-select>
          </v-window-item>

          <v-window-item value="register">
            <v-form @submit.prevent="handleRegister">
              <v-text-field
                v-model="registerData.name"
                label="Full Name"
                variant="outlined"
                density="compact"
                prepend-inner-icon="mdi-account-outline"
                class="mb-2"
              ></v-text-field>

              <v-text-field
                v-model="registerData.email"
                label="Email Address"
                type="email"
                variant="outlined"
                density="compact"
                prepend-inner-icon="mdi-email-outline"
                class="mb-2"
              ></v-text-field>

              <v-select
                v-model="registerData.role"
                :items="['User', 'Admin']"
                label="Role"
                variant="outlined"
                density="compact"
                prepend-inner-icon="mdi-shield-account-outline"
              ></v-select>
            </v-form>
          </v-window-item>

        </v-window>
      </v-card-text>

      <v-card-actions class="justify-end px-4 pb-4">
        <v-btn variant="text" color="grey" class="text-capitalize" @click="close">
          Cancel
        </v-btn>
        
        <v-btn
          v-if="activeTab === 'login'"
          variant="flat"
          color="primary"
          class="text-capitalize rounded-lg"
          :disabled="!selectedUserId"
          @click="handleLogin"
        >
          Login
        </v-btn>
        
        <v-btn
          v-else
          variant="flat"
          color="primary"
          class="text-capitalize rounded-lg"
          :disabled="!registerData.name || !registerData.email"
          @click="handleRegister"
        >
          Register & Connect
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useUsersStore } from '@/stores/users'

defineProps({
  modelValue: {
    type: Boolean,
    required: true
  }
})

const emit = defineEmits(['update:modelValue'])
const usersStore = useUsersStore()

const activeTab = ref('login') 
const selectedUserId = ref(null) 

const registerData = reactive({
  name: '',
  email: '',
  role: 'User'
})

const handleLogin = () => {
  if (selectedUserId.value) {
    usersStore.login(selectedUserId.value)
    close()
  }
}

const handleRegister = () => {
  if (!registerData.name || !registerData.email) return
  
  usersStore.addUser(registerData.name, registerData.email, registerData.role)
  
  const lastUser = usersStore.users[usersStore.users.length - 1]
  usersStore.login(lastUser.id)
  
  close()
}

const close = () => {
  emit('update:modelValue', false)
  selectedUserId.value = null
  registerData.name = ''
  registerData.email = ''
  registerData.role = 'User'
}
</script>