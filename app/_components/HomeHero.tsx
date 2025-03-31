import Link from "next/link";
import { HomeHeroText, HomeHeroHireCode } from "./";

export const HomeHero = () => {
  return (
    <section className="relative flex items-center justify-center lg:justify-between w-full">
      <HomeHeroText />
      <HomeHeroHireCode />
    </section>
  )
}
