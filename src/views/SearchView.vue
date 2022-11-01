<script lang="ts" setup>
import RowCardList from "../components/RowCardList.vue";
import SearchTips from "../components/SearchTips.vue";
import { useSearchViewData } from "./SearchView";

const data = useSearchViewData();
</script>

<template>
  <SearchTips></SearchTips>
  <RowCardList :list="data"></RowCardList>
</template>

<style scoped></style>
