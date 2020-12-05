import "../styles/globals.css";
import { ThemeProvider } from "styled-components";
import { useEffect, useState } from "react";
import Cookie from "js-cookie";

const LightTheme = {
  backgroundprimary: "#ffffff",
  backgroundSecondary: "#DFDFDD",
  fontPrimary: "#000000",
  fontSecondary: "#5A5A58",
};

const DarkTheme = {
  backgroundPrimary: "#151515",
  backgroundSecondary: "#202022",
  fontPrimary: "#ffffff",
  fontSecondary: "#A5A5A7",
};

const themes = {
  light: LightTheme,
  dark: DarkTheme,
};

function MyApp({ Component, pageProps }) {
  // const [theme, setTheme] = useState(
  //   JSON.parse(localStorage.getItem("theme")) || "dark"
  // );
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    setTheme(localStorage.getItem("theme") || "dark");
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <ThemeProvider theme={themes[theme]}>
      <Component theme={theme} setTheme={setTheme} {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
