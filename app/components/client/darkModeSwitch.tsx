"use client";

// Icons
import { MdLightMode } from "react-icons/md";
import { BsFillMoonFill } from "react-icons/bs";

// Next-themes
import { useTheme } from "next-themes";

// React
import { useEffect, useState } from "react";

export default function DarkModeSwitch() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);

  // following condition to wait until the page is fully mounted
  // and only then apply custom light / dark mode logic is here
  // to prevent "mismatch what is rendered on the server and what
  // in UI" error (server: dark mode, client: light mode, i.e.)
  useEffect(() => setMounted(true), []);

  //checks first if theming in browser is set to system and if so
  //it uses system settings (dark or light). If not, it uses
  //theme defined by user in the website
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <>
      <div className="flex space-x-2 items-center ">
        {mounted && currentTheme === "dark" ? (
          <MdLightMode
            className="text-xl cursor-pointer hover:text-amber-500"
            onClick={() => setTheme("light")}
          />
        ) : (
          <BsFillMoonFill
            className="text-xl cursor-pointer hover:text-amber-500"
            onClick={() => setTheme("dark")}
          />
        )}
      </div>
    </>
  );
}
