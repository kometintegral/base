import { FeatureTab } from "@/types/featureTab";
import PricingKOMET from "@/components/PricingKOMET";
import PricingEventNasional from "@/components/PricingEventNasional";


const featuresPricingData: FeatureTab[] = [
  {
    id: "tabOne",
    desc1: <PricingKOMET />,
  },
  {
    id: "tabTwo",
    desc1: <PricingEventNasional />,
  },
];

export default featuresPricingData;