import { reviews } from "@/app/constants";

export const ReviewsSection = () => {
  return (
    <section className="bg-black" id="reviews">
      <div className="mx-auto border-white max-w-7xl border-x lg:px-24 lg:py-36 px-8 py-24 ">
        <ul className="grid xl:grid-cols-4 gap-4 mb-8">
          {reviews.map((review) => (
            <li
              key={review.id}
              className="flex flex-col gap-y-4 p-6 bg-white transition-all duration-200 ease-in hover:scale-105"
            >
              <div className="font-bold">{review.firstname}</div>
              <p className="">{review.text}</p>
            </li>
          ))}
        </ul>
        <a
          href="https://www.avito.ru/moskva/predlozheniya_uslug/studii_zvukozapisi_arenda_247zapissvedenie_3058704276#open-reviews-list"
          className="block text-white/60 text-sm duration-200 ease-in-out focus:outline-none focus:shadow-none focus:text-white/5 hover:text-white lg:py-4 md:my-0 py-2 transform transition lg:ml-auto"
        >
          Все отзывы
        </a>
      </div>
    </section>
  );
};
