import { Content } from "./components/content/content";
import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["cyrillic"] });

export const metadata = {
  metadataBase: new URL("https://fucmusic.ru"),
  title: "Fuc Music - студия звукозаписи, Москва, Таганская",
  description:
    "Аренда студии звукозаписи. Высококласснное оборудование. Качественная запись вокала и инструментов. Сведение и мастеринг. Песня под ключ. Забронировать онлайн.",
  keywords: [
    "звукозаписывающая",
    "студия",
    "звукозапись",
    "продакшн",
    "песня под ключ",
    "песня в подарок",
    "корпоративный гимн",
    "аранжировка",
    "написание текста",
  ],

  openGraph: {
    title: "Fuc Music - студия звукозаписи, Москва, Таганская",
    description:
      "Аренда студии звукозаписи. Высококлассное оборудование. Качественная запись вокала и инструментов. Сведение и мастеринг. Песня под ключ. Забронировать онлайн.",
    url: "https://fucmusic.ru",
    siteName: "Fuc Music",
    images: [
      {
        url: "/images/fuc_music_music_studio_logo.jpg",
        width: "800",
        height: "600",
        type: "image/jpg",
      },
    ],
  },
  icons: {
    icon: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={`${montserrat.className} relative`}>
        <Header />
        <Content>{children}</Content>
        <Footer />
      </body>
    </html>
  );
}
