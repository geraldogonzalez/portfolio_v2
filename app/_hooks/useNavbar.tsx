"use client"

import { useContext, useState } from "react";

import { UIContext } from "../_context/ui";

import { NavbarReturn } from "./";

export const useNavbar = ():NavbarReturn => {

  const { isNavOpen } = useContext(UIContext)
  const [hoveredLink, setHoveredLink] = useState<string>("");

  const handleMouseEnter = (label:string) => {
    setHoveredLink(label);
  }

  const handleMouseLeave = () => {
    setHoveredLink("");
  };

  return {
    isNavOpen,
    hoveredLink,
    handleMouseEnter,
    handleMouseLeave
  }
};