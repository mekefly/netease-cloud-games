import { useRouterPath } from "@/utils/use";
import { watchEffect, type Ref } from "vue";
export function useHeaderMenuState() {
  const routeList = [
    { to: "/mobile", name: "游戏" },
    { to: "/download", name: "下载" },
  ];
  let activeIndex = $ref(undefined as undefined | number);
  function handelClick(index: number) {
    activeIndex = index;
  }

  useDefaultActiveIndex($$(activeIndex));
  return $$({ routeList, activeIndex, handelClick });
}

export function useDefaultActiveIndex(activeIndex: Ref<number>) {
  const path = $(useRouterPath());
  watchEffect(() => {
    if (path === "/") {
      return;
    }

    activeIndex.value = path === "/download" ? 1 : 0;
  });
}
