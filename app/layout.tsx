import type { Metadata } from "next";
import "./globals.css";
import { ContextsContainer } from "./_context";
import { HOCsProps } from "./_shared/interfaces";

import { MainLayout } from "./_shared/layouts/MainLayout";

export const metadata: Metadata = {
  title: "Geraldo González | Web Developer",
  description: 'Desarrollador frontend con experiencia en React, Next.js y más.',
};

export default function RootLayout({ children }: HOCsProps) {

  return (
    <ContextsContainer>
      <MainLayout>
        { children }
      </MainLayout>
    </ContextsContainer>
  );
}
