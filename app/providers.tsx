"use client";

import { ThemeProvider } from "next-themes";

export default function Providers({ children }: { children: any }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <div className="dark:bg-gray-950 dark:text-gray-200 bg-white text-black transition-colors duration-300 min-h-screen select-none">
        {children}
      </div>
    </ThemeProvider>
  );
}
