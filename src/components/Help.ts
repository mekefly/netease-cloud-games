import { computed, ref, watch, watchEffect, type Ref } from "vue";

export const showState = ref(false);

export function show() {
  showState.value = true;
}
export function close() {
  showState.value = false;
}
export function useTransitioning(
  showState: Ref<boolean>,
  duration: Ref<number>
) {
  const transitioning = ref(false);
  let timeout = null as any;
  watch(showState, () => {
    transitioning.value = true;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      transitioning.value = false;
    }, duration.value);
  });
  return transitioning;
}

export function useTransitionActive(showState: Ref<boolean>) {
  const transitionActive = ref(false);
  watchEffect(() => {
    if (showState.value) {
      setTimeout(() => {
        transitionActive.value = true;
      }, 0);
    } else {
      transitionActive.value = false;
    }
  });
  return transitionActive;
}
export function useHelpState(duration: Ref<number>) {
  const transitioning = useTransitioning(showState, duration);
  const transitionActive = useTransitionActive(showState);
  const safeActive = computed(() => transitioning.value || showState.value);

  useAutoHideScrollbar(safeActive);
  return {
    transitioning,
    transitionActive,
    problemList: useProblemList(),
    safeActive,
  };
}
export function useProblemList() {
  return ref([
    "关于网易云游戏",
    "未成年人防沉迷说明",
    "网易云游戏免费畅玩福利",
    "网易云游戏付费体系说明",
    "网易云游戏付费体系说明",
    "游客账号如何找回？",
    "找不到想玩的游戏？",
    "一起玩文明规范",
    "游戏账号安全相关说明",
    "一起玩账号安全说明",
  ]);
}
export function useAutoHideScrollbar(v: Ref<boolean>) {
  watchEffect(() => {
    if (v.value) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  });
}
