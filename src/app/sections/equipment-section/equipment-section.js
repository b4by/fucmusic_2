import { PreviewModal } from "@/app/components/preview-modal/preview-modal";
import { getImageUrl } from "@/app/utils/getImageUrl";
import Image from "next/image";
import { useEffect, useState } from "react";

const EquimpentItem = ({ item }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <li key={item.id} className="group">
      <div
        role="button"
        className="flex flex-col gap-6"
        onClick={() => setOpenModal(true)}
      >
        <div className="relative max-w-[400px] aspect-[4/3]">
          {item.image && item.image?.url && (
            <Image
              src={getImageUrl(item.image)}
              alt={item.name}
              fill
              className="object-contain hover:scale-105 transition ease-in duration-200"
              sizes="(max-width: 768px) 100vw"
              loading="lazy"
            />
          )}
        </div>
        <span className="text-sm">{item.name}</span>
      </div>
      <PreviewModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        item={item}
      />
    </li>
  );
};

export const EquipmentSection = () => {
  const [equipments, setEquipments] = useState([]);

  useEffect(() => {
    const fetchEquipments = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/equipments?populate=image&sort=rank:asc`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const res = await response.json();
        const data = res.data;
        setEquipments(data);
      } catch (error) {
        console.error("Failed to fetch equipments:", error);
      }
    };

    fetchEquipments();
  }, []);

  return (
    <section className="bg-white" id="equipments">
      <div className="mx-auto max-w-7xl px-8 lg:px-24 py-12 border-x border-black">
        <h2 className="text-black font-bold uppercase text-3xl lg:text-4xl mb-16 break-words">
          Оборудование
        </h2>
        <ul className="grid grid-cols-2 xl:grid-cols-3 gap-6">
          {equipments.length > 0 &&
            equipments?.map((item) => (
              <EquimpentItem key={item.id} item={item} />
            ))}
        </ul>
      </div>
    </section>
  );
};
