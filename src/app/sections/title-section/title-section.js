export const TitleSection = ({ title }) => {
  return (
    <section className="bg-black">
      <div className="mx-auto max-w-7xl px-8 lg:px-24 py-12 border-x bg-white border-white">
        <div className="relative flex justify-start">
          <span className="bg-white pr-3 text-4xl lg:text-8xl font-black tracking-tight text-black font-display">
            <span className="font-thin text-transparent bg-clip-text bg-gradient-to-r from-[#F18336] to-[#D12B2D]">
              ✺
            </span>
            <span className="ml-3">{title}</span>
          </span>
        </div>
      </div>
    </section>
  );
};
