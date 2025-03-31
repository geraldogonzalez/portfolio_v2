import { RemixiconComponentType } from "@remixicon/react";

export interface NavbarItem {
  navbarTitle: string;
  navbarName: string;
  links: NavbarLink[];
};

export interface FooterItems {
  footerTitle: string;
  socialLinks: SocialLink[];
};

export interface SocialLink {
  label: string;
  href: string;
  Icon: RemixiconComponentType;
  styles?: string;
}

export interface NavbarLink {
  label: string;
  href: string;
}