import { getCardDataList, query, type CardData, type Label } from "./dataBase";

export async function getCloudMobilData(): Promise<CardData[]> {
  const condition: Label[] = ["云设备", "手机游戏"];
  return query({ cardList: await getCardDataList() }, condition);
}
export async function getCloudPcData(cover?: boolean): Promise<CardData[]> {
  const condition: Label[] = ["云设备", "电脑游戏"];

  return query({ cardList: await getCardDataList() }, condition);
}

export async function getCloudDevice() {
  const condition: Label[] = ["云设备"];

  return query({ cardList: await getCardDataList() }, condition);
}
