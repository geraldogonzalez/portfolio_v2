"use client"

import { MenuButton, Navbar } from "./";

import { navbarItems } from "../data";
import Link from "next/link";

export const Header = () => {

  const { navbarTitle, navbarName, links } = navbarItems;

  return (
    <header className="h-14 border-b-[1px] border-(--stroke)">
      <div className="grid grid-cols-[auto_56px] md:grid-cols-[330px_auto] items-center h-full relative">
        <div>
          <Link href="/" className="opct-transition pl-6">{ navbarTitle }</Link>
        </div>

        <div className="h-full flex items-center">
          <MenuButton />

          <Navbar
            links={ links }
            navbarName={ navbarName }
          />
        </div>
      </div>
    </header>
  )
}
