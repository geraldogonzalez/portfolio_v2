"use client"

import { useReducer } from "react";
import { uiReducer } from "./uiReducer";
import { UIContext, initialContextState } from "./";

import { HOCsProps } from "@/app/_shared/interfaces";

export const UIProvider = ({ children }: HOCsProps) => {

  const [state, dispatch] = useReducer(uiReducer, initialContextState);

  const handleToggleNav = () => {
    dispatch({ type: "TOGGLE_NAV" });
  };

  const handleToggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  return (
    <UIContext.Provider value={{
      ...state,
      handleToggleNav,
      handleToggleTheme
    }}>
      { children }
    </UIContext.Provider>
  );
};