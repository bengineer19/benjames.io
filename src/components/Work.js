import React from "react"

import { MasonryGrid } from "./Masonry"
import IpccCard from "./WorkCards/Ipcc/Ipcc"
import OctopusCard from "./WorkCards/Octopus"
import ArmCard from "./WorkCards/Arm"
import CcCard from "./WorkCards/Cc"
import Twenty48Card from "./WorkCards/Twenty48"
import OthersCard from "./WorkCards/Others/Others"

export default () => {
  return (
    <MasonryGrid>
      <OctopusCard />
      <IpccCard />
      <Twenty48Card />
      <CcCard />
      <ArmCard />
      <OthersCard />
    </MasonryGrid>
  )
}
