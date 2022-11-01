<script lang="ts" setup>
import { useScroll } from "@vueuse/core";
import HeaderNav from "./HeaderNav.vue";

const {
  arrivedState: { top: arrivedStateTap },
} = $(useScroll(window));
</script>
<template>
  <header class="h-[80px] w-full relative flex">
    <div
      class="h-[80px] w-full fixed top-0 left-0 right-0 bg-color3 z-40 transition scale-100 transform justify-center flex"
      :class="{ 'bg-transparent': arrivedStateTap }"
      :style="{ transform: 'scale3d(1, 1, 1)' }"
    >
      <HeaderNav />
    </div>
  </header>
</template>
