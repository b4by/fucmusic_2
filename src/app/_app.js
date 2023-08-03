"use client";
import Script from "next/script";
import { Provider } from "react-redux";
import { store } from "./store/store";
import YandexMetrika from "next-yandex-metrika";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />;
    </>
  );
}
