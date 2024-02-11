import React from "react"

import { MasonryGrid } from "./Masonry"
import IpccCard from "./WorkCards/Ipcc/Ipcc"
import WorldfundCard from "./WorkCards/Worldfund"
import AxleCard from "./WorkCards/Axle"
import OctopusCard from "./WorkCards/Octopus"
import ArmCard from "./WorkCards/Arm"
import OthersCard from "./WorkCards/Others/Others"
import CcCard from "./WorkCards/Cc"
import InClimateCard from "./WorkCards/InClimate"

export default () => {
  return (
    <MasonryGrid>
      <AxleCard />
      <IpccCard />
      <ArmCard />
      {/* <Twenty48Card /> */}
      <OthersCard />
      <WorldfundCard />
      <OctopusCard />
      <CcCard />
      <InClimateCard />
    </MasonryGrid>
  )
}
