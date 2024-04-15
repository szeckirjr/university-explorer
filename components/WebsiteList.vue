<script setup lang="ts">
const props = defineProps({
  websites: {
    type: Array as PropType<string[]>,
    required: true,
  },
});
</script>

<template>
  <div class="flex flex-row gap-4">
    <a
      v-for="(website, index) in websites"
      :href="website"
      target="_blank"
      rel="noopener noreferrer"
      class="w-fit"
    >
      <span
        v-if="index === 0"
        class="bg-green-100 hover:bg-green-200 whitespace-nowrap p-1 inline rounded-md"
        >🔗 Primary</span
      >
      <span
        v-else
        class="bg-yellow-100 hover:bg-yellow-200 p-1 inline rounded-md whitespace-nowrap"
        >🔗 Alt {{ index }}</span
      >
    </a>
  </div>
</template>
