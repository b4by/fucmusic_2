import { photos } from "@/app/constants";
import Image from "next/image";
import Link from "next/link";

export const PhotosSection = () => {
  return (
    <section className="" id="photos">
      <div className="mx-auto max-w-7xl px-8 lg:px-24 py-12 border-x  text-white">
        <div className="flex justify-center">
          <ul className="grid grid-cols-2 lg:grid-cols-3">
            {photos.map((photo) => (
              <li
                className="grayscale transition-all duration-200 ease-in hover:grayscale-0 hover:scale-105"
                key={photo.id}
              >
                <Link href={photo.src}>
                  <Image
                    src={photo.src}
                    width="600"
                    height="300"
                    alt="фотография студии"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};