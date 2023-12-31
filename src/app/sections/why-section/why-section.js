import Image from "next/image";
import Link from "next/link";

export const WhySection = () => {
  return (
    <section className="overflow-hidden bg-white">
      <section className="py-8 lg:py-16 mx-auto max-w-7xl px-8 lg:px-24 items-center border-black border-y-0 border bg-white text-black relative">
        <div className="mb-12">
          <div className="xl:absolute xl:left-[100px]">
            <div className="mb-8 max-w-[400px] aspect-[4/3] relative xl:w-[400px] xl:h-[300px] lg:max-w-[400px] lg:aspect-[4/3]">
              <Link href="/images/photos/18.jpg">
                <Image
                  src="/images/photos/18.jpg"
                  alt="фото студии"
                  width="500"
                  height="300"
                />
              </Link>
            </div>
          </div>
          <div className="xl:ml-auto flex flex-col gap-y-8 py-6 max-w-xl">
            <h3 className="text-4xl font-bold uppercase">Почему мы</h3>
            <ul className="list-inside list-decimal flex flex-col gap-y-6">
              <li>
                Перед тем как вы придёте к нам в студию, мы проанализируем ваши
                запросы и пожелания
              </li>
              <li>
                Подбираем звукорежиссёра, который приближен к вашему жанру
              </li>
              <li>
                Помогаем артисту и направляем его в нужное русло для получения
                уникального результата.
              </li>
            </ul>
          </div>
        </div>
        <ul className="flex flex-col gap-y-4 list-inside md:flex-row gap-x-4 items-start font-bold uppercase text-md md:text-xs xl:text-md">
          <li className="relative flex gap-x-4">
            <h3 className="pl-6">10 лет работы</h3>
            <span className="absolute left-0 md:block text-transparent bg-clip-text bg-gradient-to-r from-[#F18336] to-[#D12B2D]">
              ⬤
            </span>
          </li>
          <li className="relative flex gap-x-4">
            <h3 className="pl-6">Центр москвы</h3>
            <span className="absolute left-0 md:block text-transparent bg-clip-text bg-gradient-to-r from-[#F18336] to-[#D12B2D]">
              ⬤
            </span>
          </li>
          <li className="relative flex gap-x-4">
            <h3 className="pl-6">Самая выгодная аренда</h3>
            <span className="absolute left-0 md:block text-transparent bg-clip-text bg-gradient-to-r from-[#F18336] to-[#D12B2D]">
              ⬤
            </span>
          </li>
          <li className="relative flex gap-x-4">
            <h3 className="pl-6">Профессиональное оборудование</h3>
            <span className="absolute left-0 md:block text-transparent bg-clip-text bg-gradient-to-r from-[#F18336] to-[#D12B2D]">
              ⬤
            </span>
          </li>
        </ul>
      </section>
    </section>
  );
};
