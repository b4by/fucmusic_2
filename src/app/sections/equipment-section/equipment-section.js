import { equipments } from "@/app/constants";
import Image from "next/image";
import Link from "next/link";

export const EquipmentSection = () => {
  return (
    <section className="bg-white" id="equipments">
      <div className="mx-auto max-w-7xl px-8 lg:px-24 py-12 border-x border-black">
        <h2 className="text-black font-bold uppercase text-3xl lg:text-4xl mb-16 break-words">
          Оборудование
        </h2>
        <ul className="grid grid-cols-2 xl:grid-cols-3 gap-6">
          {equipments.map((item) => (
            <li key={item.id} className="group">
              <Link href={item.img} className="flex flex-col gap-6">
                <div className="relative max-w-[400px] aspect-[4/3]">
                  <Image
                    src={item.img}
                    alt={item.name}
                    fill
                    className="object-contain hover:scale-105 transition ease-in duration-200"
                    sizes="(max-width: 768px) 100vw"
                    loading="lazy"
                  />
                </div>
                <span className="text-sm">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
