<script lang="ts" setup>
import { useSearchValue } from "@/views/SearchView";
import { useRouter } from "vue-router";
import IconSearch from "./icons/IconSearch.vue";
import SearchInput from "./SearchInput.vue";
import {
  getDefaultIndex,
  searchNumber,
  useAutoPushRouter,
  useIsSearchPage,
  useRouterList,
  useSlidingBlockStyle,
} from "./SubNav";

const color = "#03c47e";

const isSearchPage = $(useIsSearchPage());
const routeList = $(useRouterList());
const activeIndex = $ref(getDefaultIndex($$(routeList)));
const activeLink = $computed(() => routeList[activeIndex]?.to);
let itemsEls = $ref([] as null[] | HTMLLIElement[]);

let slidingBlockStyle = useSlidingBlockStyle($$(itemsEls), $$(activeIndex));

useAutoPushRouter($$(activeLink));
const router = useRouter();

let searchValue = useSearchValue();
</script>

<template>
  <div class="flex justify-between items-center cursor-pointer">
    <div
      v-if="isSearchPage"
      @click="
        () => {
          router.back();
        }
      "
    >
      <span>{{ "<" }}</span>
      返回
      <span v-if="searchNumber && !!searchValue">{{
        `| 搜索结果（${searchNumber}）`
      }}</span>
    </div>
    <ul
      v-if="!isSearchPage"
      class="grid gap-3 sm:gap-4 md:gap-5 grid-rows-1 grid-flow-col flex-shrink-0 relative h-10 border-b border-white border-opacity-20"
    >
      <li
        class=""
        v-for="(item, index) in routeList"
        :key="item.name"
        @click="() => (activeIndex = index)"
        ref="itemsEls"
      >
        <div class="transition">{{ item.name }}</div>
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
      <IconSearch
        class="h-6 w-6"
        @click="() => $router.push('/search')"
      ></IconSearch>
    </div>
    <SearchInput class="flex-shrink max-sm:hidden ml-6"></SearchInput>
  </div>
</template>

<style scoped></style>
