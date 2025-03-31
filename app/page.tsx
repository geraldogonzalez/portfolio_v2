import { HomeBackgroundsContainer, HomeHero } from "./_components";

export default function Home() {
  return (
    <div className="h-full overflow-hidden">
      <div className="container relative h-full flex items-center">
        <HomeBackgroundsContainer />
        <HomeHero />
      </div>
    </div>
  );
}
