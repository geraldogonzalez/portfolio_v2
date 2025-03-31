import { actionTypes, UIActionTypes, UIState } from "./";


export const uiReducer = (state: UIState, action: UIActionTypes): UIState => {

  const { setToggleTheme, setToggleNav } = actionTypes;
  const { selectedTheme, isNavOpen } = state;

  switch (action.type) {
    case setToggleTheme:
      return {
        ...state,
        selectedTheme: selectedTheme === "dark" ? "light" : "dark"
      };

    case setToggleNav:
      return {
        ...state,
        isNavOpen: !isNavOpen
      };

    default:
      return state;
  }

};