<script lang="ts" setup>
import { onMounted } from "vue";
import {
  useBannerHandle,
  useBannerState,
  useBannerTransitionState,
  useFetchBanner,
  useSliderStyle,
} from "./banner";
import IconBannerLeftArrow from "./icons/IconBannerLeftArrow.vue";
import IconBannerRightArrow from "./icons/IconBannerRightArrow.vue";

const bannerData = useFetchBanner();
const bannerState = useBannerState(bannerData);
const bannerTransitionState = useBannerTransitionState();

const sliderStyle = useSliderStyle(bannerTransitionState);

const { left, right } = useBannerHandle({
  ...bannerState,
  ...bannerTransitionState,
});

const { renderData } = bannerState;
onMounted(() => {
  setTimeout(() => {
    right();
  }, 3000);
});
</script>

<template>
  <div class="flex items-center justify-between overflow-hidden w-full rounded">
    <div
      class="absolute left-4 z-10 w-3 sm:w-5 md:w-8 lg:w-11 xl-w-15 xxl-w-20 hover:bg-[rgb(255,255,255,0.3)] rounded-full"
      @click="left"
    >
      <IconBannerLeftArrow />
    </div>
    <div class="flex w-full" :style="sliderStyle">
      <div
        class="block flex-shrink-0 w-full h-auto max-w-full"
        v-for="src in renderData"
      >
        <img class="block flex-shrink-0 w-full h-auto" :src="src" alt="" />
      </div>
    </div>
    <div
      class="absolute right-4 w-3 sm:w-5 md:w-8 lg:w-11 xl-w-15 xxl-w-20 hover:bg-[rgb(255,255,255,0.3)] rounded-full"
      @click="right"
    >
      <IconBannerRightArrow />
    </div>
  </div>
</template>

<style scoped></style>
