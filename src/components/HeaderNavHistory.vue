<script lang="ts" setup>
import { useHistory } from "@/stores/counter";
import PlayButton from "./PlayButton.vue";

const { historyList } = useHistory();
</script>

<template>
  <div class="p-4 box-border">
    <h3 class="mb-4">最近玩过</h3>
    <div v-for="item in historyList" class="flex items-center p-2">
      <img class="w-auto h-16 flex-shrink-0 mr-4" :src="item.src" alt="" />
      <div class="flex flex-col justify-around items-start">
        <span class="mb-2">{{ item.name }}</span>
        <PlayButton class="flex-grow-0"></PlayButton>
      </div>
    </div>
    <h1 class="highlight" v-if="historyList.length <= 0">您还没有玩过哦</h1>
  </div>
</template>

<style scoped>
.highlight {
  @apply text-brand-color text-xl;
}
</style>
