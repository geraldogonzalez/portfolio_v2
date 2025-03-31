"use client"

import { useContext } from "react";
import { Fira_Code } from "next/font/google";

import { Footer, Header } from "../components";
import { UIContext } from "@/app/_context/ui";

import { HOCsProps } from "../interfaces";

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});


export const MainLayout = ({ children }: HOCsProps) => {
  
  const { selectedTheme } = useContext(UIContext);

  return (
    <html lang="en" className={`${selectedTheme} min-h-full p-4 lg:p-[70px] overflow-hidden`}>
      <meta name="apple-mobile-web-app-title" content="GG Portfolio" />
      <body
        className={`${firaCode.className} rounded-lg antialiased default-stroke`}
      >
        <Header />
        <main className="h-[calc(100%_-_112px)] overflow-auto">
          { children }
        </main>
        <Footer />
      </body>
    </html>
  )
}
