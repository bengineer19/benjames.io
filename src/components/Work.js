import React from "react"

import { MasonryGrid } from "./Masonry"
import IpccCard from "./WorkCards/Ipcc/Ipcc"
import WorldfundCard from "./WorkCards/Worldfund"
import OctopusCard from "./WorkCards/Octopus"
import ArmCard from "./WorkCards/Arm"
import CcCard from "./WorkCards/Cc"
import Twenty48Card from "./WorkCards/Twenty48"
import OthersCard from "./WorkCards/Others/Others"

export default () => {
  return (
    <MasonryGrid>
      <WorldfundCard />
      <IpccCard />
      <Twenty48Card />
      <OthersCard />
      <OctopusCard />
      <CcCard />
      <ArmCard />
    </MasonryGrid>
  )
}
