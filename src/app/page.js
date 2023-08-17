"use client";
import { HeroSection } from "./sections/hero/hero";
import { VideoButtonSection } from "./sections/video-button-section/video-button-section";
import { DescriptionSection } from "./sections/description-section/description-section";
import { WhySection } from "./sections/why-section/why-section";
import { ExamplesSection } from "./sections/examples-section/examples-section";
import { ServicesSection } from "./sections/services-section/services-section";
import { EquipmentSection } from "./sections/equipment-section/equipment-section";
import { ReviewsSection } from "./sections/reviews-section/reviews-section";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { PhotosSection } from "./sections/photos-section/photos-section";
import YandexAnalytics from "./components/analytics/yandex-analytics";
import { FormBitrix } from "./components/analytics/form-bitrix";
import { MessengersBitrix } from "./components/analytics/messengers-bitrix";
import { useSearchParams } from "next/navigation";
import { ContactsSection } from "./sections/contacts-section/contacts-section";
import { Modal } from "./components/modal/modal";
import { GlobalPlayer } from "./components/global-player/global-player";

export default function Home() {
  return (
    <>
      <>
        <YandexAnalytics />
        <MessengersBitrix />
      </>
      <Provider store={store}>
        <HeroSection />
        <VideoButtonSection />
        <DescriptionSection />
        <WhySection />
        <ExamplesSection />
        <ServicesSection />
        <EquipmentSection />
        <PhotosSection />
        <ReviewsSection />
        <ContactsSection />
        <Modal />
        {/* <GlobalPlayer /> */}
      </Provider>
    </>
  );
}
