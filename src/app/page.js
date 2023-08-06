"use client";
import { HeroSection } from "./sections/hero/hero";
import { VideoButtonSection } from "./sections/video-button-section/video-button-section";
import { DescriptionSection } from "./sections/description-section/description-section";
import { WhySection } from "./sections/why-section/why-section";
import { ExamplesSection } from "./sections/examples-section/examples-section";
import { ServicesSection } from "./sections/services-section/services-section";
import { EquipmentSection } from "./sections/equipment-section/equipment-section";
import { ReviewsSection } from "./sections/reviews-section/reviews-section";
import { FormSection } from "./sections/form-section/form-section";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { PhotosSection } from "./sections/photos-section/photos-section";
import Script from "next/script";
import Head from "next/head";
import Analytics from "./components/analytics/yandex-analytics";
import YandexAnalytics from "./components/analytics/yandex-analytics";
import { FormBitrix } from "./components/analytics/form-bitrix";
import { MessengersBitrix } from "./components/analytics/messengers-bitrix";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const searchParams = useSearchParams();
  const showModal = searchParams?.modal;

  return (
    <>
      <>
        <YandexAnalytics />
        <FormBitrix />
        <MessengersBitrix />
      </>
      <HeroSection />
      <VideoButtonSection />
      <DescriptionSection />
      <WhySection />
      <Provider store={store}>
        <ExamplesSection />
      </Provider>
      <ServicesSection />
      <EquipmentSection />
      <PhotosSection />
      <ReviewsSection />
      {/* <FormSection /> */}
      {showModal && <BasicModal />}
    </>
  );
}
