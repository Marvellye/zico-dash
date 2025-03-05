import { defineStore } from 'pinia'

interface User {
  id: string
  name: string
  email: string
  picture: string
}

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as User | null,
    isAuthenticated: false
  }),
  
  actions: {
    setUser(userData: User) {
      this.user = userData
      this.isAuthenticated = true
    },
    
    logout() {
      this.user = null
      this.isAuthenticated = false
      navigateTo('/login')
    }
  },
  
  persist: true
})