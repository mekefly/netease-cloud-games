<script lang="ts" setup>
//根据宽度定义高度默认1:1
const { scaleH = 1 } = defineProps<{ scaleH?: number }>();
</script>

<template>
  <div class="reactive w-full">
    <div class="w-full h-0" :style="{ paddingBottom: `${scaleH * 100}%` }" />
    <div class="absolute top-0 left-0 h-full w-full">
      <slot />
    </div>
  </div>
</template>

<style scoped></style>
