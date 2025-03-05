<template>
  <div class="min-h-screen bg-gray-50">
    <UContainer v-if="isAuthenticated" class="flex h-screen">
      <!-- Sidebar -->
      <aside class="w-64 bg-white border-r border-gray-200 p-4">
        <div class="flex items-center gap-2 mb-6">
          <UAvatar
            v-if="user?.picture"
            :src="user.picture"
            :alt="user?.name"
          />
          <div>
            <p class="font-semibold">{{ user?.name }}</p>
            <p class="text-sm text-gray-500">{{ user?.email }}</p>
          </div>
        </div>
        
        <nav class="space-y-2">
          <NuxtLink
            to="/dashboard"
            class="block p-2 rounded hover:bg-gray-100"
            active-class="bg-gray-100"
          >
            <UIcon name="i-heroicon-home" class="mr-2" />
            Dashboard
          </NuxtLink>
          <NuxtLink
            to="/components"
            class="block p-2 rounded hover:bg-gray-100"
            active-class="bg-gray-100"
          >
            <UIcon name="i-heroicon-squares-2x2" class="mr-2" />
            Components
          </NuxtLink>
          <UButton
            color="red"
            variant="ghost"
            class="w-full mt-4"
            @click="authStore.logout()"
          >
            Logout
          </UButton>
        </nav>
      </aside>
      
      <!-- Main Content -->
      <main class="flex-1 p-6">
        <slot />
      </main>
    </UContainer>
    
    <slot v-else />
  </div>
</template>

<script setup lang="ts">
const authStore = useAuthStore()
const { isAuthenticated, user } = storeToRefs(authStore)
</script>