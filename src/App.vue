<script setup lang="ts">
import { RouterView } from "vue-router";
import Header from "./components/Header.vue";
import IndexBackground from "./components/IndexBackground.vue";
import Notice from "./components/Notice.vue";
import SubNav from "./components/SubNav.vue";
</script>

<template>
  <IndexBackground></IndexBackground>
  <Header></Header>
  <div class="flex justify-center w-full">
    <main class="w-full max-w-[1920px] px-[8%]">
      <Notice></Notice>
      <SubNav class="mt-3"> </SubNav>
      <RouterView></RouterView>
    </main>
  </div>
</template>

<style scoped></style>
