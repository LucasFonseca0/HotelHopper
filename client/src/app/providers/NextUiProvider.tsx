// app/providers.tsx
"use client";

import { NextUIProvider } from "@nextui-org/react";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProvider as MaterialTailwindProvider } from "@material-tailwind/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MaterialTailwindProvider>
      <NextUIProvider>
        <NextThemesProvider attribute="class" defaultTheme="dark">
          {children}
        </NextThemesProvider>
      </NextUIProvider>
    </MaterialTailwindProvider>
  );
}
