"use client"

import { useContext } from "react";
import { RiCloseLine, RiMenuLine } from "@remixicon/react";

import { UIContext } from "@/app/_context/ui";

export const MenuButton = () => {

  const { handleToggleNav, isNavOpen } = useContext(UIContext);

  const Icon = isNavOpen ? (
    <RiCloseLine
      size={24}
    />
  ) : (
    <RiMenuLine
      size={24}
    />
  )

  return (
    <button
      className="cursor-pointer opct-transition flex items-center justify-center w-full md:hidden"
      onClick={handleToggleNav}
      aria-label="Menu button"
    >
      { Icon }
    </button>
  )
}
