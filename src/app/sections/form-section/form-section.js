import { TitleSection } from "../title-section/title-section";

export const FormSection = () => {
  return (
    <div>
      {/* <TitleSection title="Контакты" /> */}
      <section className="border-b border-white bg-black">
        <div className="mx-auto border-white max-w-7xl border-x lg:px-24 lg:py-36 px-8 py-24">
          <div className="flex flex-col items-center justify-center gap-y-8 w-[400px] mx-auto">
            <div className="text-center flex flex-col items-center justify-center gap-y-4">
              <h3 className="text-white font-semibold text-3xl">
                Оставьте свой <br /> номер телефона
              </h3>
              <span className="text-white/60 text-lg">Мы вам перезвоним</span>
            </div>
            <form action="#" className="w-full">
              <div className="space-y-2 w-full">
                <div className="w-full mx-auto">
                  <label className="sr-only" name="name">
                    Номер телефона
                  </label>
                  <input
                    className="text-black w-full appearance-none focus:border-accent-400 focus:outline-none focus:ring-accent-400 ring-1 ring-white placeholder-white/50 bg-transparent px-3 py-3 sm:text-sm focus:bg-white border-transparent"
                    placeholder="Номер телефона"
                  />
                </div>
                <div></div>
                <div className="col-span-full">
                  <button
                    className="relative flex items-center px-4 border border-white py-4 text-white justify-center hover:bg-zinc-800 bg-black hover:border-white/50 gap-3 w-full"
                    type="submit"
                  >
                    Отправить
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
