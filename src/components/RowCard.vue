<script lang="ts" setup>
import PlayButton from "./PlayButton.vue";
const { src, name, describe } = defineProps<{
  src: string;
  name: string;
  describe?: string | string[];
}>();
const _describe = $computed(() =>
  typeof describe === "string" ? [describe] : describe
);
</script>

<template>
  <div class="p-8 flex items-center justify-start w-full bg-color2 rounded">
    <img
      class="w-[24%] max-w-[80px] rounded-xl flex-shrink-0 h-auto block"
      :src="src"
      alt=""
    />
    <div class="flex flex-col justify-center px-4">
      <h2 class="font-bold mb-2">{{ name }}</h2>
      <p class="opacity-80 text-xs" v-for="item in _describe">
        {{ item }}<br />
      </p>
    </div>
    <PlayButton class="ml-auto" />
  </div>
</template>

<style scoped></style>
