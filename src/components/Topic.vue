<script lang="ts" setup>
import { watch } from "vue";

const { list, active } = defineProps<{
  list: string[];
  active?: string;
}>();
const emit = defineEmits<{
  (e: "update:active", value: string): void;
}>();
const activeIndex = $(useActiveIndex());

function useActiveIndex() {
  let activeIndex = $ref(list.indexOf(active ?? ""));
  activeIndex = activeIndex === -1 ? 0 : activeIndex;
  watch(
    $$(activeIndex),
    (v) => {
      console.log("update:active", v);

      emit("update:active", list[activeIndex]);
    },
    { immediate: true }
  );
  return $$(activeIndex);
}
</script>

<template>
  <ul class="w-48 bg-color2 rounded overflow-hidden">
    <li
      class="px-4 py-6 hover:bg-color3"
      :class="{ 'bg-color3': activeIndex === index }"
      v-for="(item, index) in list"
      @click="() => (activeIndex = index)"
    >
      {{ item }}
    </li>
  </ul>
</template>

<style scoped></style>
