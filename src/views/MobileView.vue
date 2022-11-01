<script lang="ts" setup>
import { getMobileData } from "@/api/mobileData";
import { useFetch } from "@/utils/use";
import TopicCardList from "../components/TopicCardList.vue";
const { data = [] } = $(useFetch(() => getMobileData()));
</script>

<template>
  <TopicCardList :data="data" />
</template>

<style scoped></style>
