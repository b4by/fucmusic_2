import Service0 from "@/app/mdx/services/0.mdx";

export const services = [
  {
    id: 0,
    name: "Запись на студии",
    img: "/images/services/studio-recording.jpg",
    price: "1300",
    sale: "1500",
    MDX: <Service0 />,
  },
  {
    id: 1,
    name: "Аренда",
    img: "/images/services/rent.jpg",
    price: "550",
    sale: "1000",
  },
  {
    id: 2,
    name: "Песня под ключ",
    img: "/images/services/turnkey.jpg",
    price: "30000",
    sale: "50000",
  },
  {
    id: 3,
    name: "Сведение",
    img: "/images/services/mixing.jpg",
    price: "1500",
    sale: "",
  },
  {
    id: 4,
    name: "Коррекция нот",
    img: "/images/services/correction.jpg",
    price: "1500",
    sale: "3000",
  },
  {
    id: 5,
    name: "Дистрибьюция",
    img: "/images/services/distribution.jpg",
    price: "700",
    sale: "1000",
  },
  {
    id: 6,
    name: "Гострайтинг",
    img: "/images/services/ghostwriting.jpg",
    price: {
      from: "5000",
      to: "10000",
    },
    sale: "",
  },
  {
    id: 7,
    name: "Мастеринг",
    img: "/images/services/mastering.jpg",
    price: "2000",
    sale: "4000",
  },
  {
    id: 8,
    name: "Бит/Минус/Аранжировка",
    img: "/images/services/minus.jpg",
    price: {
      from: "3900",
      to: "15000",
    },
    sale: "",
  },
];
