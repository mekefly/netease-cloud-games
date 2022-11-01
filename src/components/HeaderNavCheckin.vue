<script lang="ts" setup>
import img_present_enrollment from "../assets/img_present_enrollmentBGPC.7bb99278.png";
import img_6352b97703d7685f103cd685ZzDi9Dky04 from "../assets/nav/6352b97703d7685f103cd685ZzDi9Dky04.gif";
import img_6352bc36840f3e4a603582a6jjKHgXC104 from "../assets/nav/6352bc36840f3e4a603582a6jjKHgXC104.png";
import img_present_freeredeem_normal from "../assets/nav/img_present_freeredeem_normal.38116b15.png";
import img_present_invitation_normal from "../assets/nav/img_present_invitation_normal.bb680d6f.png";
import Button from "./button.vue";
import IconCheckinDailyChecked from "./icons/IconCheckinDailyChecked.vue";
import IconMeArrowSmallGreen from "./icons/IconMeArrowSmallGreen.vue";
import Scale from "./Scale.vue";

const active = $ref(3);
const list = $ref(Array.from({ length: 13 }, (_, i) => Math.floor(i / 2) + 1));

function isBlock(index: number) {
  return index % 2 == 0;
}
function isBlockActive(index: number) {
  const day = index / 2;

  if (Math.floor(day) !== day) {
    return false;
  }
  return day <= active;
}
function isLenBlockActive(index: number) {}
</script>

<template>
  <div class="p-4 box-border">
    <div class="flex justify-between items-center">
      <span>签到</span>
      <span class="flex items-center text-brandColor">
        规则
        <IconMeArrowSmallGreen class="h-[1em]" />
      </span>
    </div>
    <div
      class="relative grid mt-4"
      :style="{
        gridTemplateColumns: `repeat(20, 1fr)`,
        gridTemplateRows: `repeat(2, 1fr)`,
      }"
    >
      <Scale
        v-for="(item, index) in list"
        :class="{ 'row-span-2 col-span-2': isBlock(index) }"
      >
        <div
          v-if="isBlock(index)"
          class="h-full w-full"
          :style="{ fontSize: `10px` }"
        >
          <IconCheckinDailyChecked v-if="item <= active" />
          <div
            v-else
            class="flex justify-center items-center w-full h-full border rounded-full"
          >
            {{ item }}天
          </div>
        </div>
        <div
          v-else
          class="w-full h-full border-b"
          :class="{ 'border-brand-color': item <= active }"
        ></div>
      </Scale>
    </div>
    <div
      class="w-full mt-4 text-center bg-cover py-4 rounded-md"
      :style="{ backgroundImage: `url(${img_present_enrollment})` }"
    >
      <p>
        已累计签到 <span class="highlight">{{ active }}</span> 天,今天签到获得
      </p>
      <div class="my-8">
        <p><span class="highlight">3天</span> 云手机体验资格</p>
        <p><span class="highlight">10分钟</span> 免费手游时长</p>
        <p><span class="highlight">5分钟</span> 免费端游时长</p>
        <p><span class="highlight">+1</span> 成长值</p>
      </div>
      <Button value="领取" />
    </div>
    <img class="mt-4" :src="img_present_invitation_normal" alt="" />
    <img class="mt-4" :src="img_present_freeredeem_normal" alt="" />
    <img class="mt-4" :src="img_6352b97703d7685f103cd685ZzDi9Dky04" alt="" />
    <img class="mt-4" :src="img_6352bc36840f3e4a603582a6jjKHgXC104" alt="" />
    <img class="mt-4" :src="img_6352bc36840f3e4a603582a6jjKHgXC104" alt="" />
  </div>
</template>

<style scoped>
.highlight {
  @apply text-brand-color text-xl;
}
</style>
