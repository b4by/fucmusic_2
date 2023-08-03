import Image from "next/image";

export const WhySection = () => {
  return (
    <section className="overflow-hidden bg-white">
      <section className="py-36 lg:py-16 mx-auto max-w-7xl px-8 lg:px-24 items-center border-black border-y-0 border bg-white text-black relative">
        <div className="mb-12">
          <div className="absolute left-[100px] w-[400px] h-[400px]">
            <div className="relative w-[400px] h-[300px]">
              <Image src="/images/photos/APC_0164.jpg" fill />
            </div>
          </div>
          <div className="lg:ml-auto flex flex-col gap-y-8 py-6 max-w-xl">
            <h3 className="text-4xl font-bold uppercase">Почему мы</h3>
            <ul className="list-inside list-decimal flex flex-col gap-y-6">
              <li>
                Перед тем как прийти к нам на студию, мы анализируем ваши
                запросы и пожелания
              </li>
              <li>
                Подбираем звукорежиссёра, который приближен к вашему жанру
              </li>
              <li>
                Помогаем и направляем артиста в нужное русло, чтобы получить
                наиболее уникальный результат и выделить артиста
              </li>
            </ul>
          </div>
        </div>
        <ul className="flex md:flex-row gap-x-4  items-start font-bold uppercase text-md">
          <li className="flex gap-x-4">
            <h3>Центр москвы</h3>
            <span className="md:block text-transparent bg-clip-text bg-gradient-to-r from-[#F18336] to-[#D12B2D]">
              ⬤
            </span>
          </li>
          <li className="flex gap-x-4">
            <h3>10 лет работы</h3>
            <span className="md:block text-transparent bg-clip-text bg-gradient-to-r from-[#F18336] to-[#D12B2D]">
              ⬤
            </span>
          </li>
          <li className="flex gap-x-4">
            <h3>Самая выгодная аренда</h3>
            <span className="md:block text-transparent bg-clip-text bg-gradient-to-r from-[#F18336] to-[#D12B2D]">
              ⬤
            </span>
          </li>
          <li>Професиональное оборудование</li>
        </ul>
      </section>
    </section>
  );
};
