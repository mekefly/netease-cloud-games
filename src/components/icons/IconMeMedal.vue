<script lang="ts" setup>
import iconV3 from "../../assets/icon/icon_ME_medal_V3.5f88091f.png";
const { grade = 3 } = defineProps<{ grade: number }>();
</script>
<template>
  <img :src="iconV3" alt="" />
</template>
