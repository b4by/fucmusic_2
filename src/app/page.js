import { HeroSection } from "./sections/hero/hero";
import { VideoButtonSection } from "./sections/video-button-section/video-button-section";
import { DescriptionSection } from "./sections/description-section/description-section";
import { WhySection } from "./sections/why-section/why-section";
import { ExamplesSection } from "./sections/examples-section/examples-section";
import { ServicesSection } from "./sections/services-section/services-section";
import { EquipmentSection } from "./sections/equipment-section/equipment-section";
import { ReviewsSection } from "./sections/reviews-section/reviews-section";
import { FormSection } from "./sections/form-section/form-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <VideoButtonSection />
      <DescriptionSection />
      <WhySection />
      <ExamplesSection />
      <ServicesSection />
      <EquipmentSection />
      <ReviewsSection />
      <FormSection />
    </>
  );
}
