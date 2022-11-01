<script lang="ts" setup>
import type { CardData } from "@/api/dataBase";
import Card from "./Card.vue";

const { list = [] } = defineProps<{ list?: CardData[] }>();
</script>

<template>
  <div
    class="grid gap-2 md:gap-3 grid-flow-row grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 xxl:grid-cols-7"
  >
    <Card v-for="item in list" :data="item" />
  </div>
</template>

<style scoped></style>
