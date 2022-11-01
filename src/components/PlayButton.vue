<script lang="ts" setup></script>

<template>
  <button
    class="button bg-brandColor text-white px-6 py-2 text-xs font-bold rounded-full overflow-hidden outline-none border-none active:scale-95 transition duration-150"
  >
    <slot>秒玩</slot>
  </button>
</template>

<style scoped>
.button::after {
  content: "";
  position: absolute;
  top: -50%;
  bottom: 0;
  left: 0;
  right: 0;

  background: radial-gradient(
    rgb(255, 255, 255, 0.5),
    transparent,
    transparent
  );
  transform: translateY(40%);
  opacity: 0;

  transition: opacity 200ms;
}
.button:hover::after {
  opacity: 1;
}
</style>
