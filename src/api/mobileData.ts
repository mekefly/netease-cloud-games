import { getCardDataList, query, type CardData } from "./dataBase";

export async function getMobileData(): Promise<CardData[]> {
  return query({ cardList: await getCardDataList() }, ["手机游戏"]);
}
