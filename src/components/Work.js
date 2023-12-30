import React from "react"

import { MasonryGrid } from "./Masonry"
import IpccCard from "./WorkCards/Ipcc/Ipcc"
import WorldfundCard from "./WorkCards/Worldfund"
import OctopusCard from "./WorkCards/Octopus"
import ArmCard from "./WorkCards/Arm"
import CcCard from "./WorkCards/Cc"
import InClimateCard from "./WorkCards/InClimate"

export default () => {
  return (
    <MasonryGrid>
      <WorldfundCard />
      <IpccCard />
      <CcCard />
      {/* <Twenty48Card /> */}
      <OctopusCard />
      <InClimateCard />
      <ArmCard />
      {/* <OthersCard /> */}
    </MasonryGrid>
  )
}
