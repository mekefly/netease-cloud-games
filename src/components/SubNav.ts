import { computed, ref, watch, type Ref, type StyleValue } from "vue";
import { useRouter } from "vue-router";

export function useAutoPushRouter(activeLink: Ref<string>) {
  const router = useRouter();
  watch(activeLink, () => {
    router.push(activeLink.value);
  });
}
type RouterList = {
  to: string;
  name: string;
}[];

export function useRouterList(): Ref<RouterList> {
  return ref([
    { to: "/mobile", name: "手机游戏" },
    { to: "/pc", name: "PC游戏" },
    { to: "/high", name: "手游高配（桌面板）" },
    { to: "/other", name: "更多游戏" },
  ]);
}

export function getDefaultIndex(routeList: Ref<RouterList>) {
  const router = useRouter();
  const index = routeList.value
    .map((item) => item.to)
    .indexOf(router.currentRoute.value.path);
  return index === -1 ? 0 : index;
}

import { useRouterPath } from "@/utils/use";
import { useEventListener } from "@vueuse/core";
export function useSlidingBlockStyle(
  itemsEls: Ref<null[] | HTMLLIElement[]>,
  activeIndex: Ref<number>
) {
  let resize = $ref(false);
  useEventListener("resize", () => {
    resize = !resize;
  });
  return computed(() => {
    resize;
    const activeEl = itemsEls.value[activeIndex.value];

    if (!activeEl) return {};
    const activeElRect = activeEl.getBoundingClientRect();

    return {
      left: `${activeEl.offsetLeft}px`,
      width: `${activeElRect.width}px`,
    } as StyleValue;
  });
}
export function useIsSearchPage() {
  const path = useRouterPath();
  return computed(() => path.value.includes("/search"));
}
export const searchNumber = ref(0);
