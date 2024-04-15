<script setup lang="ts">
const routes = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Favorites",
    path: "/favorites",
  },
  {
    name: "Explore",
    path: "/explore",
  },
];
</script>

<template>
  <div class="flex justify-between p-6">
    <a href="/" class="text-3xl font-extrabold">UniversityExplorer</a>
    <div class="flex gap-4">
      <NuxtLink
        v-for="route in routes"
        :key="route.name"
        :to="route.path"
        class="text-xl hover:underline"
        v-bind:class="{
          'font-bold': $route.path === route.path,
        }"
        >{{ route.name }}</NuxtLink
      >
    </div>
  </div>
</template>
