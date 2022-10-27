<script lang="ts" setup>
import { useScroll } from "@vueuse/core";
import indexBg from "../assets/bg.28296dd4.jpg";

const {
  y,
  x,
  arrivedState: { top: arrivedStateTap },
} = $(useScroll(window));
const opacity = $computed(() => {
  const v = 1 - y / 100;
  if (v > 0) {
    return v;
  } else {
    return 0;
  }
});
</script>

<template>
  <div
    class="h-screen w-full absolute left-0 right-0 transition"
    :style="{
      background: `url(${indexBg}) no-repeat`,
      backgroundSize: `100% 40%`,
      opacity,
    }"
  ></div>
</template>

<style scoped></style>
