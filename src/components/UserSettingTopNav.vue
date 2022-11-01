<script lang="ts" setup>
import IconMeGrowth from "./icons/IconMeGrowth.vue";
import IconMeMedal from "./icons/IconMeMedal.vue";
import IconPlayTogetherEdit from "./icons/IconPlayTogetherEdit.vue";
import VipCard from "./VipCard.vue";
const linkList = [
  { value: "邀请有礼" },
  { value: "帮助与反馈" },
  { value: "用户协议" },
  { value: "注销其他设备" },
  { value: "兑换" },
  { value: "退出登录" },
];
</script>

<template>
  <div class="p-4 bg-color2 h-full w-full">
    <div class="flex justify-end items-center h-8">
      <IconPlayTogetherEdit class="w-4" />
    </div>
    <div class="flex relative mt-6">
      <img
        class="h-12"
        src="https://ps.res.netease.com/cloudgame/app/img/icon_defaultavatar.6a9c5e81.png?fop=imageView/2/w/72/h/72"
        alt=""
      />
      <div class="flex flex-col justify-around items-start">
        <div class="text-xl text-white font-bold">{{ "meke" }}</div>
        <IconMeMedal class="h-4 flex-shrink-0" :grade="3" />
      </div>
      <div
        class="absolute right-0 flex flex-col items-center justify-around h-full w-20 bg-color5 rounded-l-full"
      >
        <span class="text-sm">成长值</span>
        <span class="flex items-center justify-center">
          <IconMeGrowth class="w-4" />
          <span> 233 </span>
        </span>
      </div>
    </div>
    <div class="mt-6">
      <span>关注 6</span> | <span>粉丝 1</span> | <span>广播 0</span>
    </div>
    <div class="flex justify-start mt-4">
      <div class="bg-color px-3 py-1 rounded-full bg-color5">光遇</div>
    </div>
    <VipCard class="mt-10" />
    <div class="mt-4">
      <div
        v-for="item in linkList"
        class="border-b border-[rgb(255,255,255,0.1)] py-6 hover:text-white"
      >
        {{ item.value }}
      </div>
    </div>
    <div class="flex justify-center items-center my-6">
      <div
        class="border border-[rgb(255,255,255,0.1)] px-6 py-2 rounded-full hover:text-white"
      >
        官方社媒与交流群
      </div>
    </div>
  </div>
</template>

<style scoped></style>
