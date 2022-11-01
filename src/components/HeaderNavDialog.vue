<script lang="ts" setup>
import { useIfTransition } from "@/utils/use";

const { dialogWidth = 258 } = defineProps<{ dialogWidth?: number }>();

const { transitionActive, safeActive, show, hidden, duration } =
  useIfTransition(200);
</script>

<template>
  <!-- <div @mouseenter="show"> -->
  <div @mouseenter="show" @mouseleave="hidden">
    <slot></slot>
    <div
      class="absolute top-[100%] right-0 h-0 w-full flex justify-center pb-2 transition origin-bottom-center"
      :class="{
        'scale-100 opacity-100': transitionActive,
        'scale-0 opacity-0': !transitionActive,
      }"
      :style="{ transitionDuration: `${duration}ms` }"
      v-if="$slots.dialog && safeActive"
    >
      <!-- 三角块 -->
      <div
        class="rotate-45 h-2 w-2 bg-brand-color flex-shrink-0 absolute top-[100%] left-[50%]"
        :style="{
          transform: `translate(-50%,-50%) rotate(45deg)`,
        }"
      ></div>
      <div
        class="absolute top-[100%] right-0 flex flex-col bg-color1 rounded-md overflow-hidden w-[258px] max-h-[480px] min-h-[200px]"
        :style="{ width: `${dialogWidth}px` }"
      >
        <!-- 顶步线条 -->
        <div class="top-0 w-full h-1 flex-shrink-0 bg-brand-color"></div>
        <!-- 内容区块 -->
        <div class="overflow-y-auto"><slot name="dialog"></slot></div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
