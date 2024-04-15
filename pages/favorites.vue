<script setup lang="ts">
import type { University } from "~/helpers/types";
import { store } from "~/store";

const search = ref("");
</script>

<template>
  <!-- <div class="flex flex-col gap-8 mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-20"> -->
  <div
    class="flex flex-row gap-4 w-full justify-center px-6 pb-6 shadow-md z-10"
  >
    <!-- <CountrySelector v-if="store.countries" :data="store.countries" /> -->
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
  <div v-else class="flex-grow overflow-y-auto">
    <UniversityTable :data="store.favorites" :search-filter="search" />
  </div>
  <!-- </div> -->
</template>
