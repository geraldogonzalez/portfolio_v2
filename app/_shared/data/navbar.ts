import {
  RiGithubFill,
  RiInstagramLine,
  RiLinkedinFill
} from "@remixicon/react";

import { FooterItems, NavbarItem } from "./interfaces";

export const navbarItems: NavbarItem = {
  navbarTitle: "geraldo_gonzalez",
  navbarName: "router.push",
  links: [
    {
      label: "hello.tsx",
      href: "/"
    },
    {
      label: "about.tsx",
      href: "/about"
    },
    {
      label: "contact.tsx",
      href: "/contact"
    }
  ]
};

export const footerItems: FooterItems = {
  footerTitle: "const socials = ",
  socialLinks: [
    {
      label: "LinkedIn link",
      href: "https://www.linkedin.com/in/geraldo-gonz%C3%A1lez-326898178/",
      Icon: RiLinkedinFill
    },
    {
      label: "Instagram link",
      href: "https://www.instagram.com/ggz.dev/",
      Icon: RiInstagramLine
    },
    {
      label: "GitHub link",
      href: "https://github.com/geraldogonzalez",
      Icon: RiGithubFill,
      styles: "md:hidden"
    }
  ]
};