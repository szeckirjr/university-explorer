<script setup lang="ts">
import { getFlagEmoji } from "~/helpers/country";
import type { Country, University } from "~/helpers/types";
import { store } from "~/store";
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/vue/20/solid";

const props = defineProps({
  data: {
    type: Array as PropType<Country[]>,
    required: true,
  },
});

const getCountryNameByCode = (code: string) => {
  if (!props.data) return;
  return props.data.find((item) => item.code === code)?.name;
};
</script>

<template>
  <Listbox
    class="w-64"
    :model-value="store.selectedCountry"
    @update:model-value="store.selectedCountry = $event"
  >
    <div class="relative mt-1">
      <ListboxButton
        class="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
      >
        <span
          >{{ getFlagEmoji(store.selectedCountry) }}
          {{ getCountryNameByCode(store.selectedCountry) }}</span
        >
        <span
          class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
        >
          <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
        </span>
      </ListboxButton>

      <transition
        leave-active-class="transition duration-100 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <ListboxOptions
          class="absolute mt-1 max-h-60 w-full overflow-auto z-10 rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm"
        >
          <ListboxOption
            v-for="country in data"
            :key="country.name"
            :value="country.code"
            as="template"
          >
            <li
              class="relative cursor-default select-none py-2 pl-10 pr-4 hover:bg-amber-100 hover:text-amber-900"
            >
              <span class="font-normal"
                >{{ getFlagEmoji(country.code) }} {{ country.name }}</span
              >
              <span
                v-if="store.selectedCountry === country.code"
                class="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600"
              >
                <CheckIcon class="h-5 w-5" aria-hidden="true" />
              </span>
            </li>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
</template>
