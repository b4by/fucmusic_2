import Script from "next/script";

export default function App({ Component, pageProps }) {
  return;
  <>
    <Script data-b24-form="click/20/5aff5t" data-skip-moving="true">
      {`(function(w,d,u){var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/180000|0);var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);})(window,document,'https://cdn-ru.bitrix24.ru/b25437620/crm/form/loader_20.js');`}
    </Script>
    <Component {...pageProps} />;
  </>;
}
