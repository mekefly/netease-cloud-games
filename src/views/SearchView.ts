import { getCardDataList, type CardData } from "@/api/dataBase";
import { getCloudDevice } from "@/api/otherData";
import { searchNumber } from "@/components/SubNav";
import { computed, watch, watchEffect } from "vue";
import { useRouter } from "vue-router";
export function useSearchValue() {
  const router = useRouter();
  return computed(() => (router.currentRoute.value.query.key as string) ?? "");
}

export function useSearchViewData() {
  let searchValue = useSearchValue();
  const dataPromise = $computed(async () => {
    const str = searchValue.value;
    if (!str) {
      return await getCloudDevice();
    }

    return [
      ...(await getCardDataList()).filter((item) => item.name.includes(str)),
      ...(await getCloudDevice()),
    ];
  });
  let data = $ref([] as CardData[]);
  watchEffect(() => {
    const pr = $$(dataPromise).value;
    pr.then((value) => {
      //屏蔽过期请求
      if (pr === dataPromise) {
        data = value;
      }
    });
  });
  watch($$(data), () => {
    searchNumber.value = data.length;
  });
  return $$(data);
}
