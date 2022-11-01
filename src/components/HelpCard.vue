<script lang="ts" setup>
import Button from "./button.vue";
import { close, useProblemList } from "./Help";
import IconCpCloseNormal from "./icons/IconCpCloseNormal.vue";
import IconEmojiWelcome from "./icons/IconEmojiWelcome.vue";
import IconMeArrow from "./icons/IconMeArrow.vue";
const problemList = useProblemList();
</script>

<template>
  <div
    class="flex flex-col bg-color2 w-full max-w-[600px] h-full max-h-[500px] rounded-md"
  >
    <div
      class="flex justify-center items-center flex-shrink-0 h-16 w-full bg-color1 rounded-md"
    >
      <IconEmojiWelcome
        class="absolute left-0 top-0 h-full w-auto scale-[2] origin-bottom-left"
      />
      <h2 class="text-white">帮助中心</h2>
      <span></span>
      <IconCpCloseNormal
        class="absolute right-[-42px] top-0 h-8 select-none cursor-pointer"
        @click="close"
      />
    </div>
    <div class="flex flex-grow h-0 flex-col px-10 py-4">
      <h2 class="text-white">全部问题</h2>
      <ul
        class="flex flex-col my-8 flex-grow h-full overflow-x-hidden overflow-y-auto text-white"
      >
        <li
          class="flex justify-between items-center flex-shrink-0 border-b border-[rgb(255,255,255,0.1)] h-[4em]"
          v-for="item in problemList"
        >
          <span>{{ item }}</span>
          <IconMeArrow class="h-[1em] mr-4" />
        </li>
      </ul>
      <div class="flex flex-col items-center">
        <p class="mb-2 text-sm">没有解决问题？请提交反馈</p>
        <Button value="提交反馈" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
