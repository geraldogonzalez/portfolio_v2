"use client"

import { createContext } from "react";
import { UIContextType } from "./";


export const initialContextState: UIContextType = {
  selectedTheme: "dark",
  isNavOpen: false,
  handleToggleTheme: () => {},
  handleToggleNav: () => {},
};


export const UIContext = createContext<UIContextType>(initialContextState);