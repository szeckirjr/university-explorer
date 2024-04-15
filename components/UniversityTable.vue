<script setup lang="ts">
import { HeartIcon } from "@heroicons/vue/20/solid";
import { HeartIcon as HeartOutline } from "@heroicons/vue/24/outline";
import type { University } from "~/helpers/types";
import { store, toggleFavorite } from "~/store";

const props = defineProps({
  data: {
    type: Array as PropType<University[]>,
    required: true,
  },
  searchFilter: {
    type: String,
    required: false,
  },
});

const filteredData = computed(() => {
  if (!props.searchFilter) return props.data;
  return props.data.filter((item) =>
    item.name.toLowerCase().includes(props.searchFilter!.toLowerCase())
  );
});

const isFavorite = (item: University) => {
  return store.favorites.some((uni) => uni.name === item.name);
};
</script>

<template>
  <div class="relative overflow-auto flex-grow">
    <table
      v-if="store.selectedCountries.length > 0"
      class="table-fixed border w-full max-h-20 text-sm text-left rtl:text-right relative min-w-96"
    >
      <thead class="text-md uppercase sticky top-0">
        <tr>
          <th scope="col" class="px-6 py-3 w-56">Name</th>
          <th scope="col" class="px-6 py-3 w-36">Country</th>
          <th scope="col" class="px-6 py-3 w-28">State/ Province</th>
          <th scope="col" class="px-6 py-3 w-28">Websites</th>
          <th scope="col" class="px-6 py-3 w-24">Favorite</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in filteredData"
          :key="item.domains[0] + item.name"
          class="even:bg-white odd:bg-slate-50"
        >
          <th scope="row" class="px-6 py-4 font-medium text-gray-900">
            {{ item.name }}
          </th>
          <td class="px-6 py-4">
            <CountryTag :item="item" />
          </td>
          <td class="px-6 py-4">{{ item["state-province"] }}</td>
          <td class="px-6 py-4">
            <WebsiteList :websites="item.web_pages" />
          </td>
          <td class="px-6 py-4">
            <div class="flex justify-center">
              <HeartIcon
                v-if="isFavorite(item)"
                class="h-6 w-6 text-red-500 cursor-pointer"
                @click="toggleFavorite(item)"
              />
              <HeartOutline
                v-else
                class="h-6 w-6 text-gray-500 hover:fill-gray-500 cursor-pointer"
                @click="toggleFavorite(item)"
              />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <div
      v-else
      class="flex items-center justify-center h-96 text-gray-400 text-lg"
    >
      Select countries to explore universities
    </div>
  </div>
</template>
