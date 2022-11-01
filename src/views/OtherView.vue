<script lang="ts" setup>
import { remoteTable } from "@/api/dataBase";
import { getCloudDevice } from "@/api/otherData";
import { useFetch } from "@/utils/use";
import CardList from "../components/CardList.vue";

let { data = [] } = $(
  useFetch(async () => remoteTable(await getCloudDevice(), "cover"))
);
</script>

<template>
  <CardList :list="data" />
</template>

<style scoped></style>
