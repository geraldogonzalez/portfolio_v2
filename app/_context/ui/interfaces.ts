
export interface ActionTypes {
  setToggleTheme: "TOGGLE_THEME";
  setToggleNav: "TOGGLE_NAV";
}

export interface UIActionTypes {
  type: ActionTypes[keyof ActionTypes];
}

export interface UIState {
  isNavOpen: boolean;
  selectedTheme: "light" | "dark";
}

export interface UIActions {
  doToggleTheme: () => void;
  doToggleNav: () => void;
}

export type UIContextType = & UIState & {
  handleToggleNav: () => void;
  handleToggleTheme: () => void;
};