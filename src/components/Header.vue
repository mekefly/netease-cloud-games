<script lang="ts" setup>
import { useScroll } from "@vueuse/core";
import { RouterLink } from "vue-router";
import logImg from "../assets/pc_logo.6307e755.png";

const {
  arrivedState: { top: arrivedStateTap },
} = $(useScroll(window));
const routeList = [
  { to: "/mobile", name: "游戏" },
  { to: "/download", name: "下载" },
];
</script>
<template>
  <header class="h-[80px] w-full relative flex">
    <div
      class="h-[80px] w-full fixed top-0 left-0 right-0 bg-color3 z-40 transition scale-100 transform justify-center flex"
      :class="{ 'bg-transparent': arrivedStateTap }"
      :style="{ transform: 'scale3d(1, 1, 1)' }"
    >
      <nav class="max-w-show w-full h-full flex items-center px-[8%]">
        <div class="h-[30px]">
          <img :src="logImg" class="h-full w-auto" alt="" />
        </div>
        <ul class="flex link-list">
          <li class="ml-[40px]" v-for="item in routeList">
            <RouterLink
              class="hover:text-white font-bold text-gray-400 text-size"
              activeClass="active"
              :to="item.to"
              >{{ item.name }}</RouterLink
            >
          </li>
          <li class="ml-[40px]">
            <a class="hover:text-white font-bold text-gray-400 text-size">
              帮助与反馈
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
<style lang="stylus">
.link-list
  .active
    @apply text-white
</style>
