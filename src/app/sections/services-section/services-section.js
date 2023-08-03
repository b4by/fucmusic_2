import Image from "next/image";

const PriceEl = ({ price }) => {
  if (!price.from) {
    return (
      <div>
        <span className="font-bold text-md">
          {new Intl.NumberFormat("ru-RU").format(price)} ₽
        </span>
        <span></span>
      </div>
    );
  }

  if (price.from && price.to) {
    return (
      <div className="flex items-center gap-x-2">
        <span className="font-bold text-md">
          {new Intl.NumberFormat("ru-RU").format(price.from)}
        </span>
        <span>–</span>
        <span className="font-bold text-md">
          {new Intl.NumberFormat("ru-RU").format(price.to)}
        </span>
        <span className="font-bold text-md">₽</span>
      </div>
    );
  }
};

export const ServicesSection = () => {
  return (
    <section className="overflow-hidden">
      <div className="py-36 lg:py-16 mx-auto max-w-7xl px-8 lg:px-24 items-center border-white border-y-0 border bg-black text-black relative bg-waves bg-contain bg-center bg-no-repeat">
        <div className="text-white h-[500px]">dasd</div>
      </div>
    </section>
  );
};
