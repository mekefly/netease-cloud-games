<script lang="ts" setup>
import { useScroll } from "@vueuse/core";
import navGift from "../assets/nav/631b6ba2840f3e59ba7dead8eW0GVrbh04.gif";
import navStop from "../assets/nav/6350c7eb5108e2614fd1b859DHXxB3YL04.png";
import icon_checkin from "../assets/nav/icon_checkin.15b85652.png";
import icon_INDEX_history from "../assets/nav/icon_INDEX_history.5d4f5c50.png";
import icon_index_message from "../assets/nav/icon_index_message.6a2d7f2a.png";

import logImg from "../assets/pc_logo.6307e755.png";
import HeaderMenu from "./HeaderMenu.vue";
import HeaderNavCheckinVue from "./HeaderNavCheckin.vue";
import HeaderNavDialog from "./HeaderNavDialog.vue";
import HeaderNavHistoryVue from "./HeaderNavHistory.vue";
import Menu from "./Menu.vue";
import SearchInput from "./SearchInput.vue";
import { default as UserSettingTopNav } from "./UserSettingTopNav.vue";
const btnIcons = $shallowRef([
  {
    src: navGift,
  },
  { src: navStop },
  { src: icon_checkin, dialog: HeaderNavCheckinVue },
  { src: icon_index_message },
  { src: icon_INDEX_history, dialog: HeaderNavHistoryVue },
]);

const {
  arrivedState: { top: arrivedStateTap },
} = $(useScroll(window));
</script>

<template>
  <nav
    class="flex items-center justify-between max-w-show w-full h-full px-[8%]"
  >
    <Menu />
    <div class="flex items-center">
      <img :src="logImg" class="h-[30px] w-auto" alt="" />
      <HeaderMenu class="hidden md:flex" />
    </div>
    <SearchInput class="hidden xl:flex" v-if="!arrivedStateTap" />
    <div class="items-center hidden sm:flex">
      <ul class="hidden md:flex">
        <li
          v-for="item in btnIcons"
          class="flex items-center justify-center h-[30px] w-[30px] bg-[#ffffff44] mr-4 rounded-full"
        >
          <HeaderNavDialog>
            <img :src="item.src" class="h-[60%] w-auto" alt="" />
            <template v-if="item.dialog" v-slot:dialog>
              <component :is="item.dialog"></component>
            </template>
          </HeaderNavDialog>
        </li>
      </ul>

      <HeaderNavDialog :dialogWidth="500">
        <img
          class="h-[30px]"
          src="https://ps.res.netease.com/cloudgame/app/img/icon_defaultavatar.6a9c5e81.png?fop=imageView/2/w/72/h/72"
          alt=""
        />

        <template v-slot:dialog>
          <UserSettingTopNav />
        </template>
      </HeaderNavDialog>
    </div>
  </nav>
</template>

<style scoped></style>
