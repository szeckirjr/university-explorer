<script setup lang="ts">
import { getFlagEmoji } from "~/helpers/country";
import type { University } from "~/helpers/types";
const props = defineProps({
  item: {
    type: Object as PropType<University>,
    required: true,
  },
});
</script>

<template>
  <p class="inline decoration-clone p-1 rounded-md bg-slate-200">
    {{ getFlagEmoji(item.alpha_two_code) }} {{ item.country }}
  </p>
</template>
