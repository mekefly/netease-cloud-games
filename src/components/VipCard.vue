<script lang="ts" setup>
import { ref } from "vue";
import IconMeFeature from "./icons/IconMeFeature.vue";
import IconMeFeature2 from "./icons/IconMeFeature2.vue";
import IconMeFeature3 from "./icons/IconMeFeature3.vue";
import IconMeFeature4 from "./icons/IconMeFeature4.vue";

const activeIndex = ref(0);
const valueLeft = {
  footer: [
    { str: "今日剩余平台免费时长：40分钟" },
    { str: "<10月28日起>每日免费时长正式调整为40分钟" },
  ],
  buttonStr: "开通会员",
  buttonDescribe: "已过期607天",
  feature: [
    { icon: IconMeFeature, str: "无限时长" },
    {
      icon: IconMeFeature2,
      str: "快速通道",
    },
    {
      icon: IconMeFeature3,
      str: "手游挂机",
    },
    {
      icon: IconMeFeature4,
      str: "会员云手机",
    },
  ],
};

const valueRight = {
  footer: [
    { str: "免费时长：10分钟", str2: "本周四到期5分钟", detailsButton: true },
  ],
  buttonStr: "立即充值",
  feature: [
    {
      icon: IconMeFeature3,
      str: "蓝光画质",
    },
    {
      icon: IconMeFeature2,
      str: "快速通道",
    },
  ],
};
const activeValue = $computed(
  () =>
    (activeIndex.value === 0 ? valueLeft : valueRight) as typeof valueRight &
      typeof valueLeft
);
</script>

<template>
  <div class="w-full text-white">
    <div class="flex w-full bg-[#39605a] rounded-t-xl">
      <div
        class="h-10 left flex-grow flex justify-center items-center"
        :class="{
          skewed: activeIndex === 0,
        }"
        @click="() => (activeIndex = 0)"
      >
        <span class="z-[1]"> 手游权益 </span>
      </div>
      <div
        class="h-10 right flex-grow flex justify-center items-center"
        :class="{
          skewed: activeIndex === 1,
        }"
        @click="() => (activeIndex = 1)"
      >
        <span class="z-[1]"> 端游充值 </span>
      </div>
    </div>
    <div class="overflow-hidden bg-brand-color rounded-b-xl">
      <div class="flex w-full">
        <div class="flex px-4 py-10 flex-shrink-0 w-full">
          <div class="grid grid-cols-2 grid-flow-row flex-grow">
            <div
              v-for="item in activeValue.feature"
              class="flex justify-start items-center text-sm"
            >
              <component class="h-4" :is="item.icon" />
              <span class="ml-2">{{ item.str }}</span>
            </div>
          </div>
          <div class="flex flex-col items-center justify-center px-4">
            <div
              class="flex justify-center items-center h-8 bg-white rounded-full text-brand-color px-6 py-5"
            >
              {{ activeValue.buttonStr }}
            </div>
            <div
              class="mt-1"
              :style="{
                fontSize: `10px`,
              }"
              v-if="activeValue.buttonDescribe"
            >
              {{ activeValue.buttonDescribe }}
            </div>
          </div>
        </div>
      </div>
      <div class="bg-[rgb(255,255,255,0.2)] p-4 text-white font-bold">
        <p v-for="item in activeValue.footer" class="mt-2 flex justify-between">
          <span>
            {{ item.str }}
            <span v-if="item.str2" class="bg-[rgb(0,0,0,0.1)] rounded-md ml-1">
              {{ item.str2 }}
            </span>
          </span>
          <span v-if="item.detailsButton">{{ "详情 >" }}</span>
        </p>
      </div>
      <div
        class="absolute top-0 h-full w-full bg-[rgb(255,255,255,0.2)]"
        :style="{
          background: `linear-gradient(rgb(255,255,255,0.1), rgb(255,255,255,0))`,
          transform: `rotate(-45deg) translateY(20%)`,
          transformOrigin: `top right`,
        }"
      ></div>
    </div>
  </div>
</template>

<style scoped>
.skewed::before {
  content: "";
  display: block;
  position: absolute;
  height: 100%;
  width: 100%;
  background: var(--brand-color);
  border-radius: 8px 8px 0 0;
}

.skewed::before {
  transform: perspective(0.5em) scale(1.1, 1.4) rotateX(1deg);
}
.skewed.right::before {
  transform-origin: bottom right;
}
.skewed.left::before {
  transform-origin: bottom left;
}
</style>
