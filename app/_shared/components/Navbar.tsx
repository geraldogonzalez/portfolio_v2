import { useNavbar } from "@/app/_hooks";

import { NavbarLink } from "../data";
import { NavbarItem } from "./";

interface Props {
  links: NavbarLink[];
  navbarName: string;
}

export const Navbar = ({ links, navbarName }:Props) => {

  const { isNavOpen, hoveredLink, handleMouseEnter, handleMouseLeave } = useNavbar();

  return (
    <nav className={`md:block md:max-h-fit md:static bg-(--body-background) absolute right-0 top-14 w-full max-w-sm md:max-w-none transition-all ease-in-out duration-300 overflow-hidden md:rounded-tr-lg z-10 ${ isNavOpen ? "max-h-80" : "max-h-0" }`}>
      <ul className="flex flex-col pt-3 md:flex-row md:pt-0">
        <li className="pl-6 py-3 border-b border-(--stroke) cursor-default md:hidden">{ navbarName }({ hoveredLink })</li>

        { links.map((link, index) => (
            <NavbarItem
              key={ index }
              isFirstItem={ index === 0 }
              isLastItem={ index === links.length - 1 }
              link={ link }
              handleMouseEnter={ handleMouseEnter }
              handleMouseLeave={ handleMouseLeave }
            />
            )
          )
        }
      </ul>
    </nav>
  )
}
