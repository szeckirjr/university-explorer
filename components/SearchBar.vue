<script setup lang="ts">
const search = defineModel();
</script>

<template>
  <input
    v-model="search"
    placeholder="Search favorites..."
    class="p-2 bg-gray-100 rounded-md flex-grow"
  />
</template>
