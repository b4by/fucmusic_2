"use client";
import Script from "next/script";

export const FormBirtix = () => {
  return (
    <Script
      id="birtix-button"
      data-b24-form="click/56/06885t"
      data-skip-moving="true"
      dangerouslySetInnerHTML={{
        __html: `(function(w,d,u){
      var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/180000|0);
      var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);
      })(window,document,'https://cdn-ru.bitrix24.ru/b25437620/crm/form/loader_56.js');`,
      }}
    />
  );
};
