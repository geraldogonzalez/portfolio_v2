"use client"

import { usePathname } from 'next/navigation'
import Link from "next/link";

import { NavbarLink } from "../data";

interface Props {
  isFirstItem: boolean;
  isLastItem: boolean;
  link: NavbarLink;
  handleMouseEnter: (label:string) => void;
  handleMouseLeave: () => void;
}

export const NavbarItem = ({ isFirstItem, isLastItem, link, handleMouseEnter, handleMouseLeave }: Props) => {

  const { href, label } = link;
  
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li
      onMouseEnter={ () => handleMouseEnter(isFirstItem ? `\"/hello\"` : `\"${link.href}\"`) }
      onMouseLeave={ handleMouseLeave }
      className={isLastItem ? 'md:ml-auto' : ''}
    >
      <Link
        href={ href }
        className={`pl-6 relative md:px-8 py-3 md:py-[15px] block border-b border-(--stroke) md:border-b-0 border-x nav-link ${ isActive ? 'text-(--white-text) cursor-default active-link' : 'opct-transition' } ${ isLastItem ? 'md:border-r-0' : '' }`}
      >{ label }</Link>
    </li>
  )
}
