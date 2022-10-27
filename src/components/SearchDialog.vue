<script lang="ts" setup>
import { useLocalStorage } from "@vueuse/core";
import { watchEffect } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const { searched } = defineProps<{
  searched?: string;
}>();
const emit = defineEmits<{
  (e: "search", value: string): void;
}>();

function search(value: string) {
  emit("search", value);
}

let history = $(useLocalStorage("search-history", [] as string[]));

watchEffect(() => {
  if (!searched) {
    return;
  }
  const index = history.indexOf(searched);

  if (index !== -1) {
    history.splice(index, 1);
  }

  history.unshift(searched);

  if (history.length > 20) {
    history.length = 20;
  }
});
const hotSearchList = $ref([
  "原神（B站）",
  "永劫无间（国服高配）",
  "梦幻西游PC",
  "守望先锋 '归来'",
  "赏金赛事",
  "极限竞速：地平线5（高配限说试玩版）",
  "明日方舟",
  "糖豆人（epic免费）",
  "生死狙击2",
  "光遇",
]);
</script>

<template>
  <div class="w-full absolute top-[100%] left-0 bg-color2 p-4 box-border">
    <div class="history mb-4">
      <h4>历史记录</h4>
      <div class="flex flex-wrap mt-2">
        <div
          class="label rounded-[999px] bg-color3 mx-2 my-1 px-3 py-1 hover:bg-brandColor transition-[background]"
          v-for="lab in history"
          @click="() => search(lab)"
        >
          {{ lab }}
        </div>
      </div>
    </div>
    <div class="">
      <h4>热门搜索</h4>
      <ul class="mt-2">
        <li
          class="flex mt-2"
          v-for="(item, index) in hotSearchList"
          :key="item"
          @click="() => search(item)"
        >
          <div
            class="w-8 flex text-center font-bold"
            :class="{
              'text-[red]': index === 0,
              'text-[#a87815]': index === 1,
              'text-[#028757]': index === 2,
            }"
          >
            {{ index + 1 }}
          </div>
          <p class="hover:text-brandColor">{{ item }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
