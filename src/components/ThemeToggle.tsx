import React, { useEffect, useState } from "react";
import { IoSunny, IoMoon } from "react-icons/io5/index";

const themes: string[] = ["light", "dark"];

const ThemeToggle = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [theme, setTheme] = useState(() => {
    if (import.meta.env.SSR) {
      return undefined;
    }
    if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {
      return localStorage.getItem("theme");
    }
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  });

  const toggleTheme = () => {
    const t = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", t);
    setTheme(t);
  };

  useEffect(() => {
    const root = document.documentElement;

    if (theme === "light") {
      root.classList.remove("dark");
    } else {
      root.classList.add("dark");
    }
  }, [theme]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted ? (
    <div className="flex items-center rounded-3xl overflow-hidden bg-slate-300 border border-3 duration-300 shadow-md">
      {themes.map((t) => {
        const checked = t === theme;
        return (
          <button
            key={t}
            onClick={toggleTheme}
            aria-label="toggle theme"
            className={`${
              checked ? "bg-white " : ""
            } cursor-pointer rounded-3xl p-2 text-black`}
          >
            {t === "light" ? <IoSunny /> : <IoMoon />}
          </button>
        );
      })}
    </div>
  ) : (
    <button>lol</button>
  );
};

export default ThemeToggle;
