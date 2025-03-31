import Link from "next/link"
import { footerItems } from "../data"

export const Footer = () => {

  const { footerTitle, socialLinks } = footerItems;

  const githubObj = socialLinks[socialLinks.length - 1];

  return (
    <footer className="h-14 border-t-[1px] border-(--stroke) grid grid-cols-[190px_auto] items-center">

      <div>
        <span className="pl-6 block">{ footerTitle }</span>
      </div>

      <nav className="flex h-full">
        <span className="hidden md:inline-block leading-[55px] mr-2.5 text-xl">{"["}</span>
        { socialLinks.map(({ href, Icon, styles }, index) => (
          <Link
            key={index}
            href={href}
            className={`border-(--stroke) border-l opct-transition py-3 px-4 h-full block first-of-type:md:border-x-[1px] md:border-r md:border-l-0 ${ styles ? styles : "" }`}
            target="_blank"
          >
            <Icon size={24} />
          </Link>
        ))}
        <span className="hidden md:inline-block leading-[55px] ml-2.5 text-xl">{"]"}</span>

        <Link
          href={githubObj.href}
          target="_blank"
          className="hidden md:flex border-(--stroke) border-l opct-transition py-3 px-4 h-full gap-2 items-center ml-auto"
        >
          <span>@geraldogonzalez</span>
          { <githubObj.Icon size={24} /> }
        </Link>
      </nav>
    </footer>
  )
}
