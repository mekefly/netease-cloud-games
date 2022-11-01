import type { MaybeRef } from "@vueuse/core";
import {
  computed,
  onUpdated,
  ref,
  unref,
  watch,
  watchEffect,
  type Ref,
} from "vue";
import { useRouter } from "vue-router";

export function useNextUpdate() {
  const callBacks: any[] = [];
  window.addEventListener("load", () => {
    console.log("load");
  });
  onUpdated(() => {
    callBacks.forEach((e) => {
      e();
    });
    callBacks.length = 0;
  });

  return {
    nextUpdate(_callBack?: () => void) {
      if (!_callBack) {
        return new Promise<void>((resolve, reject) => {
          callBacks.push(resolve);
        });
      }
      callBacks.push(_callBack);

      return new Promise<void>((resolve, reject) => {
        callBacks.push(resolve);
      });
    },
  };
}
export function useFetch<V>(fetch: () => Promise<V> | V): {
  data: Ref<V | undefined>;
  error: Ref<any>;
} {
  const data: Ref<V | undefined> = ref();
  const error: Ref<any | undefined> = ref();

  Promise.resolve(fetch())
    .then((v) => {
      data.value = v;
    })
    .catch((e) => {
      error.value = e;
    });

  return { data, error };
}

export function useRouterPath() {
  const router = useRouter();

  return computed(() => router.currentRoute.value.path);
}
export function useIfTransition(duration: MaybeRef<number> = 500) {
  const active = ref(false);
  const transitioning = ref(false);

  let timeout = null as any;
  watch(active, () => {
    transitioning.value = true;

    clearTimeout(timeout);
    timeout = setTimeout(() => {
      transitioning.value = false;
    }, unref(duration));
  });

  const safeActive = computed(() => {
    return active.value || transitioning.value;
  });
  const transitionActive = ref(false);
  watchEffect(() => {
    if (!active.value) {
      transitionActive.value = false;
      return;
    }
    setTimeout(() => {
      transitionActive.value = true;
    }, 0);
  });

  function show() {
    active.value = true;
  }
  function hidden() {
    active.value = false;
  }

  return {
    show,
    hidden,
    active,
    transitionActive,
    safeActive,
    transitioning,
    duration: ref(duration),
  };
}
