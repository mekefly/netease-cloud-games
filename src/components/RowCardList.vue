<script lang="ts" setup>
import type { CardData } from "@/api/dataBase";
import RowCard from "./RowCard.vue";
const { list } = defineProps<{ list: CardData[] }>();
</script>

<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 grid-flow-row gap-3 mt-4">
    <RowCard
      v-for="item in list"
      :src="item.src"
      :name="item.name"
      :describe="item.describe"
    />
  </div>
</template>

<style scoped></style>
