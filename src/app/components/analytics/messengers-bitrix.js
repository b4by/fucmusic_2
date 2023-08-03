"use client";
import Script from "next/script";

export const MessengersBitrix = () => {
  return (
    <Script
      id="bitrix-messengers"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `(function(w,d,u){
            var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/60000|0);
            var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);
    })(window,document,'https://cdn-ru.bitrix24.ru/b25437620/crm/site_button/loader_4_8wsk1p.js');`,
      }}
    />
  );
};
