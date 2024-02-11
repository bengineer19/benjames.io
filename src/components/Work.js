import React from "react"

import { MasonryGrid } from "./Masonry"
import IpccCard from "./WorkCards/Ipcc/Ipcc"
import WorldfundCard from "./WorkCards/Worldfund"
import AxleCard from "./WorkCards/Axle"
import OctopusCard from "./WorkCards/Octopus"
import ArmCard from "./WorkCards/Arm"
import CcCard from "./WorkCards/Cc"
import Twenty48Card from "./WorkCards/Twenty48"
import InClimateCard from "./WorkCards/InClimate"
import OthersCard from "./WorkCards/Others/Others"

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
