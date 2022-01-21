import "../styles/index.scss";
import type { AppProps } from "next/app";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    document.addEventListener("scroll", () => {
      document.documentElement.dataset.scroll = window.scrollY.toString();
    });
  });

  return <Component {...pageProps} />;
}

export default MyApp;
