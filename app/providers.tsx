"use client";

import { ThemeProvider } from "next-themes";
import { ReactLenis } from "./utils/lenis";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <ReactLenis root>{children}</ReactLenis>
    </ThemeProvider>
  );
}
