<script lang="ts" setup>
import { getCardDataList, query } from "@/api/dataBase";
import { useFetch } from "@/utils/use";
import TopicCardList from "../components/TopicCardList.vue";
const { data = [] } = $(
  useFetch(async () =>
    query({ cardList: await getCardDataList() }, ["电脑游戏"])
  )
);
</script>

<template>
  <TopicCardList :data="data" />
</template>

<style scoped></style>
