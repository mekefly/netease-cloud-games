<script lang="ts" setup>
import Button from "./button.vue";
import IconEmpty from "./icons/IconEmpty.vue";
</script>

<template>
  <div class="flex flex-col items-center justify-center h-72 w-full">
    <IconEmpty />
    <p class="mt-2">找不到游戏？快填写心愿单吧</p>
    <Button class="mt-4" value="马上填写" />
  </div>
</template>

<style scoped></style>
