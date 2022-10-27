<script lang="ts" setup>
import { computed, type StyleValue } from "vue";
import IconSearch from "./icons/IconSearch.vue";
import SearchInput from "./SearchInput.vue";

const activeIndex = $ref(0);
const list = $ref([
  { to: "/mobile", name: "手机游戏" },
  { to: "/pc", name: "PC游戏" },
  { to: "/high", name: "手游高配（桌面板）" },
  { to: "/other", name: "更多游戏" },
]);
let itemsEls = $ref([] as null[] | HTMLLIElement[]);
let slidingBlockStyle = computed(() => {
  const activeEl = itemsEls[activeIndex];

  if (!activeEl) return {};
  const activeElRect = activeEl.getBoundingClientRect();

  return {
    left: `${activeEl.offsetLeft}px`,
    width: `${activeElRect.width}px`,
  } as StyleValue;
});
const color = "#03c47e";
</script>

<template>
  <div class="flex justify-between">
    <ul
      class="flex-shrink-0 flex relative h-10 border-b border-white border-opacity-20"
    >
      <li
        class="mr-4 sm:mr-5 md:mr-7 lg:mr-9"
        v-for="(item, index) in list"
        :key="item.name"
        @click="() => (activeIndex = index)"
        ref="itemsEls"
      >
        <RouterLink
          class="transition"
          :class="{ 'text-white': index === activeIndex }"
          :to="item.to"
          >{{ item.name }}</RouterLink
        >
      </li>
      <div
        class="sliding-block h-[3px] absolute bottom-[-2px] rounded transition-[left,width]"
        :style="[
          slidingBlockStyle,
          { backgroundColor: color, boxShadow: `0 0 10px 0 ${color}` },
        ]"
      ></div>
    </ul>
    <div class="icon sm:hidden flex items-center justify-center">
      <IconSearch class="h-6 w-6"></IconSearch>
    </div>
    <SearchInput class="flex-shrink max-sm:hidden"></SearchInput>
  </div>
</template>

<style scoped></style>
