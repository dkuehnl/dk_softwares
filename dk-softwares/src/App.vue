<script setup>
import { RouterView, RouterLink } from 'vue-router'
</script>

<template>
  <div class="p-4">
    <nav class="flex gap-4 mb-4">
      <RouterLink to="/" class="text-blue-600">Home</RouterLink>
      <RouterLink to="/about" class="text-blue-600">About</RouterLink>
    </nav>
    <RouterView />
  </div>
</template>