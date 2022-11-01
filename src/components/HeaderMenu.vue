<script lang="ts" setup>
import { useHeaderMenuState } from "./HeaderMenu";
import { show } from "./Help";
const { routeList, activeIndex, handelClick } = useHeaderMenuState();
</script>

<template>
  <ul class="flex link-list">
    <li
      class="ml-[40px]"
      v-for="(item, index) in routeList"
      @click="() => handelClick(index)"
    >
      <RouterLink
        class="hover:text-white font-bold text-size"
        :class="{
          'text-white': index === activeIndex,
          'text-gray-400': !(index === activeIndex),
        }"
        :to="item.to"
        >{{ item.name }}</RouterLink
      >
    </li>
    <li class="ml-[40px]" @click="show">
      <a class="hover:text-white font-bold text-gray-400 text-size">
        帮助与反馈
      </a>
    </li>
  </ul>
</template>
