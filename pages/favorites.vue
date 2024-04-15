<script setup lang="ts">
import type { University } from "~/helpers/types";
import { store } from "~/store";

const search = ref("");
</script>

<template>
  <div class="flex gap-4 w-full px-6 pb-6 shadow-md z-10">
    <SearchBar v-model="search" />
  </div>
  <div
    v-if="store.favorites.length === 0"
    class="text-center my-16 flex flex-col items-center gap-8"
  >
    <h1>No favorites yet</h1>
    <NuxtLink
      href="/"
      class="bg-blue-400 hover:bg-blue-500 transition-all p-2 px-4 text-white rounded-lg"
      >Explore universities</NuxtLink
    >
  </div>
  <div
    v-else
    class="flex-grow overflow-y-auto px-2 py-2 md:py-6 sm:px-8 md:px-12 lg:px-16 xl:px-20"
  >
    <UniversityTable :data="store.favorites" :search-filter="search" />
  </div>
</template>
