<script lang="ts" setup>
import icon from "../../assets/icon/icon_playtogether_edit_20_2.4007107f.png";
import Scale from "../Scale.vue";
const active = $ref(false);
</script>
<template>
  <Scale>
    <div
      @mouseenter="() => (active = true)"
      @mouseleave="() => (active = false)"
      class="flex h-full w-full overflow-hidden"
    >
      <img
        class="h-full flex-shrink-0 w-200% max-w-none"
        :class="{ 'translate-x-[-50%]': active }"
        :src="icon"
      />
    </div>
  </Scale>
</template>
