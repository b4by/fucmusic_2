import YandexMetrika from "next-yandex-metrika";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <YandexMetrika
          yid={94468047}
          clickmap={true}
          trackLinks={true}
          accurateTrackBounce={true}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
