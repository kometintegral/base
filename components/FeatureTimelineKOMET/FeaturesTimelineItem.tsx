import React from "react";
import { FeatureTab } from "@/types/featureTab";


const FeaturesTimelineItem = ({ featureTab }: { featureTab: FeatureTab }) => {
  const {desc1} = featureTab;

  return (
    <>
          {desc1}
    </>
  );
};

export default FeaturesTimelineItem;
