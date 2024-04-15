<script setup lang="ts">
import { store } from "~/store";
import type { University } from "~/helpers/types";
import { GiftIcon } from "@heroicons/vue/24/outline";

const getRandomNumbers = (max: number, count: number) => {
  const numbers = new Set<number>();
  while (numbers.size < count) {
    numbers.add(Math.floor(Math.random() * max));
  }
  return Array.from(numbers);
};

const { data, error } = useAsyncData("universities", async () => {
  const baseUrl = "http://universities.hipolabs.com/search";
  const response = await fetch(baseUrl);
  const data = (await response.json()) as University[];
  return data;
});

const options = ref<University[]>([]);

const getRandomOptions = () => {
  if (!data.value) return [];
  const randomNumbers = getRandomNumbers(data.value.length, 10);
  const values = randomNumbers.map((num) => data.value![num]);
  options.value = values;
};

getRandomOptions();
</script>

<template>
  <div class="px-6 py-2 text-center flex flex-col gap-6">
    <h1 class="text-2xl">
      Find random universities abroad by shuffling through universities around
      the world
    </h1>
    <button
      @click="getRandomOptions"
      class="bg-blue-400 hover:bg-blue-500 transition-all p-2 px-4 text-white w-fit mx-auto text-xl font-bold rounded-lg flex gap-3"
    >
      <GiftIcon class="h-6 w-6" />
      Surprise Me
    </button>
    <div
      class="flex-grow overflow-y-auto px-6 py-6 sm:px-8 md:px-12 lg:px-16 xl:px-20"
    >
      <UniversityTable :data="options" />
    </div>
  </div>
</template>
