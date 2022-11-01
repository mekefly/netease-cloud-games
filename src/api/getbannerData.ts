export async function getBannerData(): Promise<string[]> {
  const imgs = import.meta.glob("../assets/bannerList/*.*");

  return (
    await Promise.all(Object.entries(imgs).map(([key, value]) => value()))
  ).map((value) => (value as any).default);
}
