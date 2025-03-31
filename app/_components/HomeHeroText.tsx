import { HomeHeroGithubLink } from "./";

export const HomeHeroText = () => {
  return (
    <div className="grid gap-[75px]">
      <div className="max-w-72 md:max-w-[504px]">
        <p className="text-lg">Hi all! I am</p>
        <h1 className="text-5xl text-(--white-text) font-medium leading-[57.6px] md:text-6xl md:leading-[66px]">Geraldo González</h1>
        <div className="text-xl md:text-3xl md:leading-[42px] leading-[30px] text-indigo-500 flex gap-3">
          <span>{">"}</span>
          <h6 className="typing-effect inline-block">Front-end developer</h6>
        </div>
      </div>
        
      <HomeHeroGithubLink />
    </div>
  )
}
