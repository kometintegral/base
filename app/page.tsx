import { Metadata } from "next";
import { Video } from "@/components/Video";
import Hero from "@/components/Hero";
import Brands from "@/components/Sponshorship";
import WhatIsKOMET from "@/components/WhatIsKOMET";
import FAQ from "@/components/FAQ";
import FeatureTimeline from "@/components/FeatureTimelineKOMET";
import FeaturePricing from "@/components/FeaturePricingKOMET";
// Hidden Components
import AboutKOMET from "@/components/AboutKOMET";
import AboutEventNasional from "@/components/AboutEventNasional";
import PricingKOMET from "@/components/PricingKOMET";
import PricingEventNasional from "@/components/PricingEventNasional";


export const metadata: Metadata = {
  title: "KOMET XXIV",
  description: "Kompetisi Matematika Nasional",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <WhatIsKOMET />
      <FeatureTimeline />
      <Video videoId="-X9g3eUSTRs"/>
      <FeaturePricing />
      <FAQ />
    </main>
  );
}
