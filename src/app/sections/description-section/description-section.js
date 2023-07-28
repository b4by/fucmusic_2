import Image from "next/image";

export const DescriptionSection = () => {
  return (
    <section className="overflow-hidden">
      <section className="bg-transparent py-36 lg:py-16 mx-auto max-w-7xl px-8 lg:px-24 items-center border-white border-y-0 border bg-pattern bg-contain relative">
        <div className="bg-descriptionImg w-[200px] bg-no-repeat bg-contain"></div>
        <div className="flex gap-6">
          <div className="text-white max-w-xl py-6">
            <h3 className="text-white text-2xl mb-8">
              <span className="font-semibold text-white uppercase">
                Fuc Music{" "}
              </span>
              — это сеть студии музыкального продакшена по всей России!
            </h3>
            <div className="flex flex-col gap-y-8">
              <p>
                Студия оборудована высококлассным оборудованием , необходимые
                для качественной записи и сведения вашего продукта.
              </p>
              <p>
                Команда звукорежиссёров с музыкальным образованием и большим
                опытом работы ждёт вас!
              </p>
            </div>
          </div>
          <Image
            src="/images/description-img.png"
            height="440"
            width="440"
            alt="иллюстрация с иконками оборудования музыкальной студии"
            className="hidden lg:block lg:absolute right-[100px] top-0"
          />
        </div>
      </section>
    </section>
  );
};
