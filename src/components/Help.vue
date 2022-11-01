<script lang="ts" setup>
import { ref } from "vue";
import { useHelpState } from "./Help";
import HelpCard from "./HelpCard.vue";
const duration = ref(300);

const { problemList, safeActive, transitionActive } = $(useHelpState(duration));
</script>

<template>
  <div
    class="fixed left-0 right-0 top-0 bottom-0 bg-[rgb(0,0,0,0.5)] transition flex items-center justify-center z-40"
    v-if="safeActive"
    :style="{
      background: transitionActive ? `rgb(0,0,0,0.5)` : `rgb(0,0,0,0)`,
      transitionDuration: `${duration}ms`,
    }"
  >
    <HelpCard
      :style="{
        opacity: transitionActive ? 1 : 0,
        transform: transitionActive ? `translateY(0px)` : `translateY(-20px)`,
        transitionDuration: `${duration}ms`,
      }"
    />
  </div>
</template>

<style scoped></style>
