<script lang="ts" setup>
import { useIfTransition } from "@/utils/use";
import { useAutoHideScrollbar } from "./Help";
import IconIndexBackHovered from "./icons/IconIndexBackHovered.vue";
import IconIndexHamburgerNormal from "./icons/IconIndexHamburgerNormal.vue";
import UserSettingTopNav from "./UserSettingTopNav.vue";

const { transitionActive, safeActive, duration, hidden, show } =
  useIfTransition(200);

useAutoHideScrollbar(safeActive);
</script>

<template>
  <IconIndexHamburgerNormal class="h-[30px] md:hidden" @click="show" />
  <Teleport :to="'body'" v-if="safeActive">
    <div
      class="fixed top-0 -left-[100%] flex flex-col h-full w-full bg-color1 overflow-y-auto z-50 transition"
      :style="{
        transform: transitionActive ? `translateX(100%)` : '',
        transitionDuration: `${duration}ms`,
      }"
    >
      <div class="m-4" @click="hidden">
        <IconIndexBackHovered class="h-10 w-auto" />
      </div>
      <UserSettingTopNav class="h-full w-full bg-color1" />
    </div>
  </Teleport>
</template>

<style scoped></style>
