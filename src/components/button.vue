<script lang="ts" setup>
const { value } = defineProps<{
  value: string;
}>();
</script>

<template>
  <button
    class="border-brandColor border rounded-full px-6 py-2 text-brandColor font-medium hover:bg-[#03c47e22]"
  >
    {{ value }}
  </button>
</template>

<style scoped></style>
