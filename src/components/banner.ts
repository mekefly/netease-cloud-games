import { getBannerData } from "@/api/getbannerData";
import { computed, ref, watch, type Ref, type UnwrapRef } from "vue";

type BannerState = {
  renderData: Ref<string[]>;
  activeIndex: Ref<number>;
  getNewIndex: (change: number, index: number) => number;
};

export function useBannerState(bannerData: Ref<string[]>): BannerState {
  const len = computed(() => bannerData.value.length);
  let activeIndex = ref(0);

  const renderData = computed(() => {
    let _index = getNewIndex(-1, activeIndex.value);
    const newList: UnwrapRef<typeof bannerData> = [];

    for (let i = 0; i < len.value; i++) {
      newList.push(bannerData.value[_index]);
      _index = getNewIndex(1, _index);
    }

    return newList;
  });
  return { renderData, activeIndex, getNewIndex };

  function getNewIndex(change: number, index: number): number {
    return (index + change + len.value) % len.value;
  }
}
export function useBannerHandle(options: BannerTransitionState & BannerState): {
  left: () => void;
  right: () => void;
} {
  let { enableTransition, activeIndex, getNewIndex, transitionOffset } =
    $(options);
  function left() {
    if (enableTransition) return;
    const offset = -1;
    activeIndex = getNewIndex(offset, activeIndex);
    setOffset(offset);
  }
  function right() {
    if (enableTransition) return;
    const offset = 1;
    activeIndex = getNewIndex(offset, activeIndex);
    setOffset(offset);
  }
  function setOffset(offset: number) {
    transitionOffset = offset;
  }
  return { left, right };
}
export function useFetchBanner() {
  let bannerData = $ref([] as string[]);

  getBannerData().then((v) => {
    bannerData = v;
  });
  return $$(bannerData);
}

export function useBannerTransitionState(): BannerTransitionState {
  let transitionOffset = ref(0);
  let enableTransition = ref(false);
  let duration = ref(400);

  watch(transitionOffset, (offset) => {
    if (!offset) {
      return;
    }

    setTimeout(() => {
      transitionOffset.value = 0;
      enableTransition.value = true;
      setTimeout(() => {
        enableTransition.value = false;
      }, duration.value);
    }, 0);
  });

  return { transitionOffset, enableTransition, duration };
}

export function useSliderStyle(options: BannerTransitionState) {
  const { transitionOffset, enableTransition, duration } = $(options);
  const sliderStyle = $computed(() => {
    return {
      transform: `translateX(${transitionOffset * 100 + -100}%)`,
      transition: enableTransition ? `transform ${duration}ms` : "",
    };
  });
  return $$(sliderStyle);
}

type BannerTransitionState = {
  transitionOffset: Ref<number>;
  enableTransition: Ref<boolean>;
  duration: Ref<number>;
};
