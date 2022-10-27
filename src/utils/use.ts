import { onUpdated } from "vue";

export function useNextUpdate() {
  const callBacks: any[] = [];
  window.addEventListener("load", () => {
    console.log("load");
  });
  onUpdated(() => {
    console.log("onUpdate");

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
