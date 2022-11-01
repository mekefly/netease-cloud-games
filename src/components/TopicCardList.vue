<script lang="ts" setup>
import { query, type CardData, type Label } from "@/api/dataBase";
import Banner from "../components/Banner.vue";
import CardList from "../components/CardList.vue";
import Topic from "../components/Topic.vue";
const { data = [] } = defineProps<{ data?: CardData[] }>();

const activeStr = $ref("");

const activeData = $computed(() => {
  if (activeStr === "全部") {
    return data;
  }
  return query({ cardList: data }, [activeStr as Label]);
});
const topicData = $computed(() => {
  const set = new Set();
  data.forEach((item) => item.label.forEach((item) => set.add(item)));
  return ["全部", ...set] as string[];
});
</script>

<template>
  <div class="flex items-start mt-6">
    <Topic
      class="flex-shrink-0 w-28 sm:w-32 md:w-40 lg:w-48"
      :list="topicData"
      v-model:active="activeStr"
    ></Topic>
    <div class="flex flex-col pl-2 sm:pl-3 lg:pl-5 box-border">
      <Banner />
      <CardList class="mt-2 sm:mt-3 lg:mt-5" :list="activeData" />
    </div>
  </div>
</template>

<style scoped></style>
