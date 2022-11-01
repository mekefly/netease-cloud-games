import { getCardDataList } from "./dataBase";

export async function getHighData() {
  return await (
    await getCardDataList()
  ).filter((item) => item.label.includes("高配桌面板"));
}
