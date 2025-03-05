<template>
  <div>
    <h1 class="text-2xl font-bold mb-6">UI Components</h1>
    
    <!-- Buttons Section -->
    <UCard class="mb-6">
      <template #header>
        <h2 class="text-xl font-semibold">Buttons</h2>
      </template>
      
      <div class="flex flex-wrap gap-4">
        <UButton>Default</UButton>
        <UButton color="primary">Primary</UButton>
        <UButton color="secondary">Secondary</UButton>
        <UButton color="success">Success</UButton>
        <UButton color="warning">Warning</UButton>
        <UButton color="danger">Danger</UButton>
      </div>
    </UCard>
    
    <!-- Form Elements -->
    <UCard class="mb-6">
      <template #header>
        <h2 class="text-xl font-semibold">Form Elements</h2>
      </template>
      
      <div class="space-y-4">
        <UInput
          label="Text Input"
          placeholder="Enter some text"
        />
        
        <UTextarea
          label="Textarea"
          placeholder="Enter multiple lines of text"
        />
        
        <USelect
          label="Select"
          :options="['Option 1', 'Option 2', 'Option 3']"
        />
        
        <UToggle label="Toggle Switch" />
      </div>
    </UCard>
    
    <!-- Alerts -->
    <UCard class="mb-6">
      <template #header>
        <h2 class="text-xl font-semibold">Alerts</h2>
      </template>
      
      <div class="space-y-4">
        <UAlert title="Info Alert" color="info">
          This is an informational message.
        </UAlert>
        
        <UAlert title="Success Alert" color="success">
          Operation completed successfully!
        </UAlert>
        
        <UAlert title="Warning Alert" color="warning">
          Please review before proceeding.
        </UAlert>
        
        <UAlert title="Error Alert" color="danger">
          An error occurred during the process.
        </UAlert>
      </div>
    </UCard>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: 'auth'
})
</script>