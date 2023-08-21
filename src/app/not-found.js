import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mt-auto">
      <div className="h-screen mx-auto max-w-7xl divide-y divide-white lg:border-x border-white text-white">
        <div className="flex items-center justify-center text-white flex-col gap-y-8 h-full">
          <h2>Страница не найдена</h2>
          <Link href="/">Вернуться на главную</Link>
        </div>
      </div>
    </section>
  );
}
