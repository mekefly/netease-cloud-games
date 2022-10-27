<script lang="ts" setup>
import IconNotice from "./icons/IconNotice.vue";
const message = $ref(
  "【平台福利调整说明通知】10月28日起平台福利时长即将调整，详情可查看站内信了解更多【特惠】手游会员月卡首购仅27元，季卡首购仅65元！【抽奖】天天抽大奖，超多限免、时长福利等你来拿！"
);
</script>

<template>
  <div class="h-[40px] w-full bg-color4 flex items-center px-3">
    <IconNotice class="h-5"></IconNotice>
    <span class="text-[#f3ae1f] whitespace-nowrap overflow-hidden">{{
      message
    }}</span>
  </div>
</template>

<style scoped></style>
