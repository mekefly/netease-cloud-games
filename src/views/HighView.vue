<script lang="ts" setup>
import type { CardData } from "@/api/dataBase";
import { getHighData } from "@/api/highData";
import CardList from "../components/CardList.vue";
let highData: CardData[] = $ref([]);

getHighData().then((v) => {
  highData = v;
});
</script>

<template>
  <CardList :list="highData" />
</template>

<style scoped></style>
