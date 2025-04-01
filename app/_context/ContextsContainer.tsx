import { Analytics } from "@vercel/analytics/react"

import { HOCsProps } from "../_shared/interfaces";
import { UIProvider } from "./ui";

export const ContextsContainer = ({ children }: HOCsProps) => {
  return (
    <UIProvider>
      <Analytics />
      { children }
    </UIProvider>
  )
}
