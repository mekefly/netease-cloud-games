<script lang="ts" setup>
import type { CardData } from "@/api/dataBase";
import { useHistory } from "@/stores/counter";
import PlayButton from "./PlayButton.vue";
const { data } = defineProps<{ data: CardData }>();
const isCover = $computed(() => data.label.includes("cover"));
const { pushHistory } = useHistory();
</script>

<template>
  <div class="flex flex-col items-center bg-color2 rounded-md overflow-hidden">
    <div
      class="w-full"
      :class="{ [`p-2 sm:p-3 md:p-4 lg:p-5 xl:p-6 box-border`]: !isCover }"
    >
      <div
        v-if="!isCover"
        class="rounded-3xl w-full h-0 pb-[100%] box-border overflow-hidden bg-cover bg-center"
        :class="[{}]"
        :style="{
          backgroundImage: `url(${data.src}) `,
        }"
      ></div>
      <img class="rounded-md" v-else :src="data.src" alt="" />
    </div>
    <div
      class="flex-grow w-full p-2 pt-0 sm:p-3 md:p-4 lg:p-5 xl:p-6 box-border flex flex-col items-center"
    >
      <h2 class="mb-4 text-white">{{ data.name }}</h2>
      <PlayButton class="mt-auto" @click="() => pushHistory(data)" />
    </div>
  </div>
</template>

<style scoped></style>
