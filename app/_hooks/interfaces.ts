
export interface NavbarReturn {
  isNavOpen: boolean;
  hoveredLink: string;
  handleMouseEnter: (label:string) => void;
  handleMouseLeave: () => void;
}
