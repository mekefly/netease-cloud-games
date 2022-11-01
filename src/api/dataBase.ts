import i3 from "../assets/cardlist/5d5fc34a5e60270a152c3958itwFgPkr02.jpg";
import i2 from "../assets/cardlist/6333af589aaaab505093f2b81HG7DHaN04.png";
import i4 from "../assets/cardlist/6358c63b81f7501c4fd39236ggkJdVr804.png";
import i1 from "../assets/cardlist/光遇.png";
export type Label =
  | "热门推荐"
  | "火爆"
  | "限免"
  | "手机游戏"
  | "高配桌面板"
  | "电脑游戏"
  | "高配"
  | "云设备"
  | "cover"
  | "角色扮演"
  | "策略游戏"
  | "近期上新";
export type CardData = {
  src: string;
  name: string;
  label: Array<Label>;
  describe?: string[];
};

/**
 * label ["云设备","云手机"] , ["云设备","云电脑","火爆"], ["云设备","云电脑","高配"], ["火爆"]
 *
 * 如果输入条件 query(["云设备","云手机"]) 将返回 ["云设备","云手机"]
 * 如果输入条件 query(["云设备","云电脑"]) 将返回["云设备","云电脑","火爆"], ["云设备","云电脑","高配"]
 * 如果输入条件 query(["云设备","云电脑"],["云设备","云手机"]) 将返回 ["云设备","云手机"], ["云设备","云电脑","火爆"], ["云设备","云电脑","高配"]
 *
 * @export
 * @param {...string[][]} rest
 * @return {*}
 */
export function query(options: { cardList: CardData[] }, ...rest: Label[][]) {
  return options.cardList.filter((cardData) =>
    // 查询
    rest.some(
      //必须同时满足
      (query) => query.every((query) => cardData.label.includes(query))
    )
  );
}
export function remoteTable(data: CardData[], table: Label) {
  return data.map((item) => {
    const index = item.label.indexOf(table);
    if (index === -1) return item;
    item.label.splice(index, 1);
    return item;
  });
}

export async function getCardDataList(): Promise<CardData[]> {
  return [
    {
      src: (
        await import(
          "../assets/cardlist/5fcdf66702c9a1855a2898ebFootMoKZ02.png"
        )
      ).default,
      name: "云手机",
      label: ["手机游戏", "云设备"],
      describe: ["你想玩游戏的都在这", "打造云端专属游戏库"],
    },
    {
      src: (
        await import(
          "../assets/cardlist/61f20336b7a4844e18a3034dM3xiF8h304.png"
        )
      ).default,
      name: "云电脑",
      label: ["火爆", "电脑游戏", "云设备", "cover"],
      describe: ["任意游戏随心玩", "私人专属云空间"],
    },
    {
      src: (
        await import(
          "../assets/cardlist/6000f88e8b74274696fc690bzlaiFyWt03.png"
        )
      ).default,
      name: "高配云电脑",
      label: ["高配", "电脑游戏", "云设备", "cover"],
      describe: ["超高配置任意玩", "秒开大作无压力"],
    },
    {
      src: (
        await import(
          "../assets/cardlist/60f78ab9143cfa37173058149zJGNeW203.jpg"
        )
      ).default,
      name: "永劫无间（国服）",
      label: ["火爆", "电脑游戏", "cover", "角色扮演"],
    },
    {
      src: (
        await import(
          "../assets/cardlist/623d34683b12f8a867f74e2bPbxtExfm04.jpg"
        )
      ).default,
      name: "原神PC（高配）",
      label: ["高配", "电脑游戏", "cover"],
    },
    {
      src: (
        await import(
          "../assets/cardlist/6124666196dee40bd4c622degRsyF1VI03.jpg"
        )
      ).default,
      name: "超激斗梦境",
      label: ["高配", "火爆", "电脑游戏", "cover"],
    },
    {
      src: (
        await import(
          "../assets/cardlist/5de0af99143cfa950d983cba9djiCoJM02.jpg"
        )
      ).default,
      name: "守望先锋“归来”",
      label: ["策略游戏", "电脑游戏", "cover"],
    },
    {
      src: (
        await import(
          "../assets/cardlist/5eb8da9f6f049437f436ddach8mqHYeB02.jpg"
        )
      ).default,
      name: "泰亚史诗",
      label: ["电脑游戏", "cover", "近期上新"],
    },
    {
      src: i1,
      name: "光遇",
      label: ["热门推荐", "火爆", "手机游戏"],
    },
    {
      src: i2,
      name: "原神",
      label: ["热门推荐", "火爆", "手机游戏"],
    },
    {
      src: i3,
      name: "明日方舟",
      label: ["热门推荐", "火爆", "手机游戏"],
    },
    {
      src: i4,
      name: "明日方舟",
      label: ["热门推荐", "限免", "手机游戏"],
    },
    {
      src: (
        await import(
          "../assets/cardlist/61a5ebc4b7a4840285016d2cKRfVrAfC03.png"
        )
      ).default,
      name: "崩坏3",
      label: ["热门推荐", "火爆", "手机游戏"],
    },
    {
      src: (
        await import(
          "../assets/cardlist/601f6abd2786fd27c2e4a18aug2CQRkl03.png"
        )
      ).default,
      name: "第五人格",
      label: ["热门推荐", "火爆", "手机游戏"],
    },
    {
      src: (
        await import(
          "../assets/cardlist/63412eeb84beef86f8816355R0DpIm3w04.png"
        )
      ).default,
      name: "极无双",
      label: ["热门推荐", "手机游戏"],
    },
    {
      src: (
        await import(
          "../assets/cardlist/6357a8f2d995190bb2ca150fB2WtdaFP04.png"
        )
      ).default,
      name: "风色幻想：命运传说",
      label: ["热门推荐", "手机游戏"],
    },
    {
      src: (
        await import(
          "../assets/cardlist/632ae5334940ea7aceb71d53Xrl3wDsw04.png"
        )
      ).default,
      name: "盾之勇者成名录：浪潮",
      label: ["热门推荐", "手机游戏"],
    },
    {
      src: (
        await import(
          "../assets/cardlist/6358aefd9de9f6146df0dcd2FOFJIhx504.png"
        )
      ).default,
      name: "全明星激斗",
      label: ["热门推荐", "手机游戏"],
    },
    {
      src: (
        await import(
          "../assets/cardlist/5fd9f4ca96dee46c44a98600N1O1Lm5W02.png"
        )
      ).default,
      name: "哈利波特：魔法觉醒",
      label: ["热门推荐", "火爆", "手机游戏"],
    },
    {
      src: (
        await import(
          "../assets/cardlist/60990be42786fd89a377d04dmWEKXcYD03.png"
        )
      ).default,
      name: "战双帕弥什",
      label: ["热门推荐", "手机游戏"],
    },
    {
      src: (
        await import(
          "../assets/cardlist/63329fbf052dfe462ea0b8c5JYWpU9v904.png"
        )
      ).default,
      name: "爆炒江湖",
      label: ["热门推荐", "限免", "手机游戏"],
    },
    {
      src: (
        await import(
          "../assets/cardlist/6348047a2011ec1ae5a6c2dbaIwEWT8I04.png"
        )
      ).default,
      name: "暗影战姬",
      label: ["热门推荐", "手机游戏"],
    },
    {
      src: (
        await import(
          "../assets/cardlist/635759500c02f784e334e297VTvfqG7O04.png"
        )
      ).default,
      name: "神曲H5",
      label: ["热门推荐", "限免", "手机游戏"],
    },
    {
      src: (
        await import(
          "../assets/cardlist/634809e92ef6ee247e3eff2fUIGtcdZs04.png"
        )
      ).default,
      name: "从零开始的异世界生活-无限",
      label: ["热门推荐", "手机游戏"],
    },
    {
      src: (
        await import(
          "../assets/cardlist/6348d3be43d7921929a64f41Pf2copiK04.png"
        )
      ).default,
      name: "魂器学院",
      label: ["热门推荐", "手机游戏"],
    },
    {
      src: (
        await import(
          "../assets/cardlist/634e9a69becf8b0ef37f9e18NaT0iVTA04.png"
        )
      ).default,
      name: "魔法王权",
      label: ["热门推荐", "限免", "手机游戏"],
    },
    {
      src: (
        await import(
          "../assets/cardlist/634806ac96b4615fa5595189oKgEM7c104.png"
        )
      ).default,
      name: "龙珠觉醒",
      label: ["热门推荐", "手机游戏"],
    },
    {
      src: (
        await import(
          "../assets/cardlist/6195c761bca47b1a46ab943cTIq2RFwL03.png"
        )
      ).default,
      name: "光遇（高配桌面版）",
      label: ["热门推荐", "高配桌面板", "手机游戏", "火爆"],
    },
    {
      src: (
        await import(
          "../assets/cardlist/5fd9f4ca96dee46c44a98600N1O1Lm5W02.png"
        )
      ).default,
      name: "哈利波特：魔法觉醒（高配桌面版）",
      label: ["热门推荐", "高配桌面板", "手机游戏", "火爆"],
    },
  ];
}
