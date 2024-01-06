import React, { useState } from "react";
import { Provider } from "./index";

export default function ContextProvider({ children }) {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <Provider
      value={{
        theme: {
          theme,
          toggleTheme,
        },
      }}
    >
      {children}
    </Provider>
  );
}
