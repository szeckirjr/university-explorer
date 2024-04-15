<script setup lang="ts">
import { fetchCountries } from "./store";

fetchCountries();
</script>

<template>
  <div class="h-screen flex flex-col">
    <TopNav />
    <NuxtLoadingIndicator :throttle="0" color="red" :height="6" />
    <NuxtPage />
  </div>
</template>
