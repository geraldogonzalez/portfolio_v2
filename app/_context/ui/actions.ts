import { actionTypes, UIActions } from "./"

export const actions = ():UIActions => {

  const { setToggleTheme, setToggleNav } = actionTypes;
  
  const doToggleTheme = () => ({
    type: setToggleTheme
  })
  
  const doToggleNav = () => ({
    type: setToggleNav
  })

  return {
    doToggleTheme,
    doToggleNav
  }
}