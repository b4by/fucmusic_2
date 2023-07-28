export const WhySection = () => {
  return (
    <section className="overflow-hidden bg-white">
      <section className="py-36 lg:py-16 mx-auto max-w-7xl px-8 lg:px-24 items-center border-black border-y-0 border bg-white text-black relative">
        <div className="absolute w-full h-full top-0 left-0 bg-waves bg-no-repeat bg-cover"></div>
        <div className="lg:ml-auto flex flex-col gap-y-8 py-6 max-w-xl">
          <h3 className="text-4xl font-bold uppercase">Почему мы</h3>
          <ul className="list-inside list-decimal flex flex-col gap-y-6">
            <li>
              Перед тем как прийти к нам на студию, мы анализируем ваши запросы
              и пожелания
            </li>
            <li>Подбираем звукорежиссёра, который приближен к вашему жанру</li>
            <li>
              Помогаем и направляем артиста в нужное русло, чтобы получить
              наиболее уникальный результат и выделить артиста
            </li>
          </ul>
        </div>
      </section>
    </section>
  );
};
