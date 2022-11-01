<script setup lang="ts">
import { RouterView } from "vue-router";
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";
import Help from "./components/Help.vue";
import IndexBackground from "./components/IndexBackground.vue";
import Notice from "./components/Notice.vue";
</script>

<template>
  <IndexBackground></IndexBackground>
  <Header></Header>
  <div class="flex justify-center w-full">
    <main class="w-full max-w-[1920px] px-[8%]">
      <Notice></Notice>
      <RouterView></RouterView>
    </main>
  </div>
  <Footer />
  <Help />
</template>

<style scoped></style>
