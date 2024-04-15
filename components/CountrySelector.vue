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
import {
  CheckIcon,
  ChevronUpDownIcon,
  XMarkIcon,
} from "@heroicons/vue/20/solid";

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
  <ClientOnly>
    <Listbox
      class="w-full"
      multiple
      :model-value="store.selectedCountries"
      @update:model-value="store.selectedCountries = $event"
    >
      <div class="relative mt-1">
        <ListboxButton
          class="relative w-full rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md sm:text-sm flex gap-3 flex-wrap"
        >
          <div
            v-for="country in store.selectedCountries"
            class="bg-slate-100 w-fit p-1 rounded-md flex items-center whitespace-nowrap"
          >
            {{ getFlagEmoji(country) }} {{ getCountryNameByCode(country) }}
            <button
              @click.stop="
                store.selectedCountries = store.selectedCountries.filter(
                  (item) => item !== country
                )
              "
              class="ml-1"
            >
              <XMarkIcon
                class="h-4 w-4 hover:text-red-500"
                aria-hidden="true"
              />
            </button>
          </div>
          <span
            v-if="store.selectedCountries.length === 0"
            class="text-gray-400 text-lg"
            >Select countries...</span
          >
          <span class="absolute inset-y-0 right-0 flex items-center pr-2">
            <XMarkIcon
              v-if="store.selectedCountries.length > 0"
              class="h-5 w-5 text-gray-400 hover:text-red-500"
              aria-hidden="true"
              @click.stop="store.selectedCountries = []"
            />
            <ChevronUpDownIcon
              class="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
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
              v-for="country in data.filter(
                (item) => !store.selectedCountries.includes(item.code)
              )"
              :key="country.name"
              :value="country.code"
              as="template"
            >
              <li
                class="relative cursor-pointer select-none py-2 px-4 hover:bg-amber-100 hover:text-amber-900"
              >
                <span class="font-normal"
                  >{{ getFlagEmoji(country.code) }} {{ country.name }}</span
                >
              </li>
            </ListboxOption>
          </ListboxOptions>
        </transition>
      </div>
    </Listbox>
  </ClientOnly>
</template>
