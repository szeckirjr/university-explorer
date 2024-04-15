<script setup lang="ts">
import { store } from "~/store";
import type { University } from "~/helpers/types";

const { data, error } = useAsyncData("universities", async () => {
  const baseUrl = "http://universities.hipolabs.com/search";
  const response = await fetch(baseUrl);
  const data = (await response.json()) as University[];
  return data;
});

const search = ref("");

const getUniversitiesByCountries = (countryCodes: string[]) => {
  if (!data.value) return [];
  return data.value.filter((uni) => countryCodes.includes(uni.alpha_two_code));
};

const universities = computed(() => {
  if (!data.value) return [];
  return store.selectedCountries
    ? getUniversitiesByCountries(store.selectedCountries)
    : data.value;
});
</script>

<template>
  <div
    class="flex flex-col gap-4 w-full justify-center px-6 pb-6 shadow-md z-10"
  >
    <CountrySelector v-if="store.countries" :data="store.countries" />
    <SearchBar v-model="search" />
  </div>
  <div
    class="flex-grow overflow-y-auto px-2 py-2 md:py-6 sm:px-8 md:px-12 lg:px-16 xl:px-20"
  >
    <span v-if="error" class="text-red-500">Error: {{ error.message }}</span>
    <UniversityTable
      v-if="data && store.selectedCountries"
      :data="universities"
      :search-filter="search"
    />
  </div>
</template>
