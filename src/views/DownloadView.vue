<script lang="ts" setup>
import pic_pc from "../assets/downloadView/pic_pc.c4090797.png";
import pic_switch_platform from "../assets/downloadView/pic_switch_platform.b8433e67.png";
import pic_tv from "../assets/downloadView/pic_tv.d81b9b56.png";
import pic_word_switch_platform from "../assets/downloadView/pic_word_switch_platform.86e85c63.png";
import pic_word_switch_platform_414 from "../assets/downloadView/pic_word_switch_platform_414.30e35c50.png";
import IconPC from "../components/icons/IconPC.vue";
import IconPhone from "../components/icons/IconPhone.vue";
import IconTV from "../components/icons/IconTV.vue";
import PlayButton from "../components/PlayButton.vue";

import pic_qrcode from "../assets/downloadView/pic_qrcode.6559c2a7.png";
const downloadCardList = [
  {
    text1: "移动端",
    text2: ["手机玩转手游和PC游戏", "出门也能玩大作"],
    text3: "同时支持Android/iOS扫码",
    downloadButtonText: "Android客户端下载",
    text4: ["iOS用户可扫描上方二维码体验网页版", "App store敬请期待"],
    icon: IconPhone,
    imgSrc: pic_qrcode,
  },
  {
    text1: "TV版",
    text2: ["无需增加外设，电视直接玩游戏", "客厅秒变游戏厅"],
    text3: "",
    downloadButtonText: "TV版客户端下载",
    text4: ["下载后通过U盘安装至电视即可", "可用手机当虚拟手柄"],
    icon: IconTV,
    imgSrc: pic_tv,
  },
  {
    text1: "PC版-Beta",
    text2: ["突破配置限制，电脑点开就玩", "没有跑不起来的游戏"],
    text3: "",
    downloadButtonText: "PC客户端（Beta）下载",
    text4: ["目前仅支持Win 10 64位系统", "MAC用户请用Chrome浏览器登录畅玩"],
    icon: IconPC,
    imgSrc: pic_pc,
  },
];
</script>

<template>
  <h2
    class="flex items-center justify-center my-8 flex-col sm:flex-row"
    :style="{
      backgroundImage: `linear-gradient(122deg,rgba(53,74,96,.15),rgba(48,64,81,.4) 83%)`,
    }"
  >
    <img
      class="h-auto w-[180px] scale-125 sm:mr-10 flex-shrink-0"
      :src="pic_switch_platform"
    />
    <img
      class="hidden md:block w-[436px] h-auto flex-shrink-0"
      :src="pic_word_switch_platform"
    />
    <img
      class="md:hidden w-[200px] m-8 sm:m-0"
      :src="pic_word_switch_platform_414"
    />
  </h2>
  <ul
    class="grid gap-10 grid-flow-row grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 rounded mb-32"
  >
    <li
      class="bg-color3 flex flex-col items-center p-4 rounded"
      v-for="item in downloadCardList"
    >
      <p class="flex items-center text-xs">
        <component :is="item.icon" class="h-[1em] w-auto"></component>
        <span>{{ item.text1 }}</span>
      </p>
      <p class="text-center text-brandColor my-6">
        <span v-for="str in item.text2">{{ str }}<br /></span>
      </p>
      <div class="flex items-center flex-col">
        <img class="h-[150px] w-auto flex-shrink-0" :src="item.imgSrc" alt="" />
        <span class="mt-1 h-4">{{ item.text3 }}</span>
      </div>

      <PlayButton class="m-6">{{ item.downloadButtonText }}</PlayButton>
      <p class="text-center">
        <span v-for="str in item.text4">{{ str }}<br /></span>
      </p>
    </li>
  </ul>
</template>

<style scoped></style>
