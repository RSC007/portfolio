import { useCallback, useEffect, useMemo, useState } from "react";
import { Provider } from "./index";

const getInitialTheme = () => {
  try {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") return saved;
    return window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark";
  } catch {
    return "dark";
  }
};

export default function ContextProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    try {
      localStorage.setItem("theme", theme);
    } catch {
      /* storage unavailable (private mode) - ignore */
    }
    document.documentElement.style.background =
      theme === "light" ? "#ffffff" : "#212121";
    document.documentElement.style.colorScheme = theme;
  }, [theme]);

  const toggleTheme = useCallback(
    () => setTheme((t) => (t === "dark" ? "light" : "dark")),
    []
  );

  const value = useMemo(
    () => ({ theme: { theme, toggleTheme } }),
    [theme, toggleTheme]
  );

  return <Provider value={value}>{children}</Provider>;
}
