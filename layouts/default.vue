<template>
  <div class="dark:bg-primary-dark dark:text-text-color-dark min-h-screen">
    <!-- Horizontal Header -->
    <header class="bg-black dark:bg-black text-white p-4">
      <div class="container mx-auto flex items-center justify-between">
        <NuxtLink to="/" class="text-2xl font-bold">Zico Dash</NuxtLink>
        <nav>
          <ul class="flex space-x-4">
            <li><NuxtLink to="/dashboard" class="hover:text-gray-300">Dashboard</NuxtLink></li>
            <li><NuxtLink to="/components" class="hover:text-gray-300">Components</NuxtLink></li>
          </ul>
        </nav>
        <UButton
          color="red"
          variant="ghost"
          @click="authStore.logout()"
        >
          Logout
        </UButton>
      </div>
    </header>

    <div class="container mx-auto flex py-6">
      <!-- Responsive Sidebar -->
      <aside class="w-64 min-w-64 bg-gray-800 dark:bg-secondary-dark text-white p-4 space-y-4">
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
            class="block p-2 rounded hover:bg-gray-700 dark:hover:bg-gray-600"
            active-class="bg-gray-700 dark:bg-gray-600"
          >
            <UIcon name="i-heroicon-home" class="mr-2" />
            Dashboard
          </NuxtLink>
          <NuxtLink
            to="/components"
            class="block p-2 rounded hover:bg-gray-700 dark:hover:bg-gray-600"
            active-class="bg-gray-700 dark:bg-gray-600"
          >
            <UIcon name="i-heroicon-squares-2x2" class="mr-2" />
            Components
          </NuxtLink>
        </nav>
      </aside>

      <!-- Main Content -->
      <main class="flex-1 p-6">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
const authStore = useAuthStore()
const { isAuthenticated, user } = storeToRefs(authStore)
</script>
