<template>
  <div class="min-h-screen flex items-center justify-center dark:bg-primary-dark">
    <UCard class="w-full max-w-md dark:bg-secondary-dark dark:text-text-color-dark">
      <template #header>
        <h1 class="text-2xl font-bold text-center">Welcome Back</h1>
      </template>

      <div class="flex flex-col items-center gap-4">
        <p class="text-gray-600 dark:text-gray-300 text-center">
          Sign in to access your dashboard
        </p>

        <UButton
          color="black"
          class="w-full"
          @click="handleGoogleLogin"
        >
          <UIcon name="i-heroicon-user" class="mr-2" />
          Sign in with Google
        </UButton>
      </div>
    </UCard>
  </div>
</template>

<script setup lang="ts">
const authStore = useAuthStore()
const config = useRuntimeConfig()

const handleGoogleLogin = async () => {
  try {
    // Google OAuth login logic will go here
    // For now, using mock data
    const mockUser = {
      id: '123',
      name: 'John Doe',
      email: 'john@example.com',
      picture: 'https://ui-avatars.com/api/?name=John+Doe'
    }
    authStore.setUser(mockUser)
    await navigateTo('/dashboard')
  } catch (error) {
    console.error('Login failed:', error)
  }
}
</script>
