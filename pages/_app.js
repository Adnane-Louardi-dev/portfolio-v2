import "../styles/globals.css";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { useEffect, useState } from "react";
import Head from "next/head";

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

export const themes = {
  light: LightTheme,
  dark: DarkTheme,
};

const GlobalStyle = createGlobalStyle`
  body{
    background-color: ${({ theme }) => theme.backgroundPrimary};
    position: relative;
  }
`;

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
    <>
      <Head>
        <title>Snehil</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="/js/NotAtAllInteresting.js"></script>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Primary Meta Tags */}
        <title>Snehil's Portfolio</title>
        <meta name="title" content="Snehil's Portfolio" />
        <meta
          name="description"
          content="Snehil is a passionate programmer who's on a journey to become a full-stack web developer at a FAANG company. He's an Electronics and Communication undergraduate from SRMIST, India. He also likes playing/making games and watching anime and hates talking about himself in the third person."
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://snehil.tech/" />
        <meta property="og:title" content="Snehil's Portfolio" />
        <meta
          property="og:description"
          content="Snehil is a passionate programmer who's on a journey to become a full-stack web developer at a FAANG company. He's an Electronics and Communication undergraduate from SRMIST, India. He also likes playing/making games and watching anime and hates talking about himself in the third person."
        />
        <meta
          property="og:image"
          itemProp="image"
          content="http://snehil.tech/og-image.jpg"
        />
        <meta
          property="og:image:secure_url"
          itemProp="image"
          content="https://snehil.tech/og-image.jpg"
        />
        <meta property="og:image:type" content="image/jpeg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://snehil.tech/" />
        <meta property="twitter:title" content="Snehil's Portfolio" />
        <meta
          property="twitter:description"
          content="Snehil is a passionate programmer who's on a journey to become a full-stack web developer at a FAANG company. He's an Electronics and Communication undergraduate from SRMIST, India. He also likes playing/making games and watching anime and hates talking about himself in the third person."
        />
        <meta
          property="twitter:image"
          content="http://snehil.tech/og-image.jpg"
        />
        <link rel="apple-touch-icon" href="http://snehil.tech/logo192.png" />
      </Head>
      <GlobalStyle theme={themes[theme]} />
      <ThemeProvider theme={themes[theme]}>
        <Component theme={theme} setTheme={setTheme} {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
