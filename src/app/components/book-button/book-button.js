"use client";

import { useEffect, useState } from "react";

export const BookButton = () => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => setIsClient(true), []);

  return (
    <>
      {isClient && (
        <script
          data-b24-form="click/56/06885t"
          data-skip-moving="true"
          id="bitrix-button"
        >
          {(function (w, d, u) {
            var s = d.createElement("script");
            s.async = true;
            s.src = u + "?" + ((Date.now() / 180000) | 0);
            var h = d.getElementsByTagName("script")[0];
            h.parentNode.insertBefore(s, h);
          })(
            window,
            document,
            "https://cdn-ru.bitrix24.ru/b25437620/crm/form/loader_56.js"
          )}
        </script>
      )}
      <button className="text-white/60 text-sm duration-200 ease-in-out focus:outline-none focus:shadow-none focus:text-white hover:text-white p-2 transform transition lg:ml-auto border border-white/60  hover:border-white">
        Записаться
      </button>
    </>
  );
};
