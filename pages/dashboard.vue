<template>
  <div>
    <h1 class="text-2xl font-bold mb-6">Dashboard</h1>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Stats Cards -->
      <UCard>
        <template #header>
          <div class="flex items-center gap-2">
            <UIcon name="i-heroicon-users" />
            <h3 class="font-semibold">Total Users</h3>
          </div>
        </template>
        <p class="text-3xl font-bold">1,234</p>
      </UCard>
      
      <UCard>
        <template #header>
          <div class="flex items-center gap-2">
            <UIcon name="i-heroicon-document" />
            <h3 class="font-semibold">Documents</h3>
          </div>
        </template>
        <p class="text-3xl font-bold">56</p>
      </UCard>
      
      <UCard>
        <template #header>
          <div class="flex items-center gap-2">
            <UIcon name="i-heroicon-chart-bar" />
            <h3 class="font-semibold">Analytics</h3>
          </div>
        </template>
        <p class="text-3xl font-bold">89%</p>
      </UCard>
    </div>
    
    <!-- Recent Activity -->
    <UCard class="mt-6">
      <template #header>
        <h2 class="text-xl font-semibold">Recent Activity</h2>
      </template>
      
      <ul class="divide-y">
        <li v-for="i in 3" :key="i" class="py-3">
          <div class="flex items-center gap-4">
            <UAvatar
              src="https://ui-avatars.com/api/?name=User"
              size="sm"
            />
            <div>
              <p class="font-medium">User Activity {{ i }}</p>
              <p class="text-sm text-gray-500">2 hours ago</p>
            </div>
          </div>
        </li>
      </ul>
    </UCard>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: 'auth'
})
</script>