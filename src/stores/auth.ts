import apiClient from '@/services/AxiosClient'
import { defineStore } from 'pinia'
// import type { Organizer } from '@/types'
import type { User } from '@/types'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: null as string | null,
    user: null as User | null,
  }),
  getters: {
    currentUserName(): string {
      return this.user?.username || ''
    },
    isAdmin(): boolean {
      console.log('isAdmin: ' + this.user?.roles)
      console.log(this.user)
      return this.user?.roles.includes('ROLE_ADMIN') || false
    }
  },

  actions: {
    async login(email: string, password: string) {
      const response = await apiClient.post('/api/v1/auth/authenticate', {
        username: email,
        password: password,
      })
      this.token = response.data.access_token
      localStorage.setItem('token', this.token as string)
      
      const meResponse = await apiClient.get('/api/v1/auth/me')
      this.user = meResponse.data.user
      localStorage.setItem('user', JSON.stringify(this.user))

      return response
    },
    logout() {
      console.log('logout')
      this.token = null
      this.user = null
      // localStorage.removeItem('access_token')
      localStorage.removeItem('token')
      localStorage.removeItem('user')
    },
    reload(token: string, user: User) {
      this.token = token
      this.user = user
    }
  },
})
