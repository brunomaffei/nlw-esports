interface GameBannerProps {
  bannerUrl: string;
  title: string;
  adsCounts: number;
}

export function GameBanner({bannerUrl, title, adsCounts} : GameBannerProps) {
  return (
    <a href="" className="relative rounded-lg overflow-hidden">
    <img src={bannerUrl} />
    <div className="w-full pt-16 pb-4 px-4 bg-game-gradient block absolute bottom-0 left-0 right-0">
      <strong className="font-bold text-white">{title}</strong>
      <span className="text-zinc-300 text-sm block">{adsCounts} anúncio(s)</span>
    </div>
  </a>
  )
};