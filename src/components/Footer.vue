<script lang="ts" setup>
import neteasePng from "../assets/footer/netease.2.png";
import niePng from "../assets/footer/nie.2.png";
import Link from "./Link.vue";
</script>

<template>
  <footer>
    <div
      class="flex flex-col md:flex-row items-center md:items-end md:justify-center"
    >
      <div class="flex mb-3 md:mb-0 md:mr-6">
        <img :src="neteasePng" alt="" />
        <img :src="niePng" alt="" />
      </div>
      <div class="text-center mt-1 md:text-start">
        <Link>公司简介</Link>
        -
        <Link>客户服务</Link>
        -
        <Link>网易云游戏隐私政策及儿童个人信息保护规则</Link>
        -
        <Link>网易游戏</Link>
        -
        <Link>联系我们</Link>
        -
        <Link>商务合作</Link>
        -
        <Link>加入我们</Link>
        <br />
        <span> 网易公司版权所有 ©1997-2022 </span>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Link>网络游戏行业防沉迷自律公约</Link>
      </div>
    </div>
    <div class="flex justify-center mt-4">
      <Link>ICP备案：粤B2-20090191-18</Link>
    </div>
  </footer>
</template>

<style scoped></style>
