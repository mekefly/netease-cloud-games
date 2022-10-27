<script lang="ts" setup>
import router from "@/router";
import { getQueryVariable } from "@/utils/utils";
import { watch, type StyleValue } from "vue";
import IconSearch from "./icons/IconSearch.vue";
import SearchDialog from "./SearchDialog.vue";

let focused = $ref(false);
let searchValue = $ref(getQueryVariable("key") ?? "");

let searched = $ref(undefined as undefined | string);

function handleSearch() {
  searched = searchValue;

  console.log("search");

  router.push(`/search?key=${searchValue}`);
  searchValue = "";
}

function handleFocus() {
  focused = true;
}
const searchDialogShow = $computed(() => focused && searchValue === "");
let searchDialogAnimating = $ref(false);
const searchDialogDuration = 1000;

let timeout = null as any;
watch($$(searchDialogShow), () => {
  searchDialogAnimating = true;
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    searchDialogAnimating = false;
  }, searchDialogDuration);
});
let searchDialogStyle: StyleValue = $ref({});
watch(
  $$(searchDialogShow),
  async () => {
    if (searchDialogShow) {
      setTimeout(() => {
        searchDialogStyle = {
          opacity: 1,
          transition: `${searchDialogDuration}ms`,
          transform: "",
          transitionProperty: "opacity,transform",
        };
      }, 0);
    } else {
      searchDialogStyle = {
        opacity: 0,
        transition: `${searchDialogDuration}ms`,
        transform: "translateY(-10px)",
        transitionProperty: "opacity,transform",
      };
    }
  },
  { immediate: true }
);
</script>

<template>
  <div
    class="max-w-[400px] w-full h-[40px] flex items-center bg-color4 rounded box-border px-3"
    :class="[focused ? 'outline-brandColor outline' : '']"
    @focusin="handleFocus"
    @focusout="() => (focused = false)"
  >
    <IconSearch class="w-4 h-4 flex-shrink-0"></IconSearch>
    <input
      class="bg-transparent outline-none border-none px-2 block flex-shrink w-full"
      @keyup.enter="handleSearch"
      v-model="searchValue"
      type="text"
      placeholder="搜索你想要的游戏"
    />

    <SearchDialog
      v-show="searchDialogShow || searchDialogAnimating"
      @search="
        (value) => {
          searchValue = value;
          handleSearch();
          searchValue = value;
        }
      "
      class="mt-4"
      :searched="searched"
      :style="searchDialogStyle"
    ></SearchDialog>
  </div>
</template>

<style scoped></style>
