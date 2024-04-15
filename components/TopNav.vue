<script setup lang="ts">
import { HomeIcon, HeartIcon, SparklesIcon } from "@heroicons/vue/24/outline";
import { HomeIcon as HomeIconSolid } from "@heroicons/vue/24/solid";
import type { DefineComponent, FunctionalComponent } from "vue";

const routes: {
  name: string;
  path: string;
}[] = [
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
  <div class="flex flex-col justify-between gap-4 md:flex-row p-6">
    <a href="/" class="text-2xl md:text-3xl font-extrabold"
      >UniversityExplorer</a
    >
    <div class="flex gap-2 md:gap-4">
      <NuxtLink
        v-for="page in routes"
        :key="page.name"
        :to="page.path"
        class="text-lg md:text-xl flex items-center gap-1 hover:underline"
        icon="route.icon"
        v-bind:class="{
          'font-bold': $route.path === page.path,
        }"
      >
        <HomeIcon
          v-if="page.name === 'Home' && $route.path !== page.path"
          class="h-5 w-5"
          v-bind:class="{
            'fill-black': $route.path === page.path,
          }"
        />
        <HomeIconSolid
          v-else-if="page.name === 'Home' && $route.path === page.path"
          class="h-5 w-5"
        />
        <HeartIcon
          v-else-if="page.name === 'Favorites'"
          class="h-5 w-5"
          v-bind:class="{
            'fill-black': $route.path === page.path,
          }"
        />
        <SparklesIcon
          v-else-if="page.name === 'Explore'"
          class="h-5 w-5"
          v-bind:class="{
            'fill-black': $route.path === page.path,
          }"
        />
        {{ page.name }}</NuxtLink
      >
    </div>
  </div>
</template>
