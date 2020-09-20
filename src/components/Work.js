import React from "react"

import { MasonryGrid } from "./Masonry"
import IpccCard from "./WorkCards/Ipcc"
import OctopusCard from "./WorkCards/Octopus"
import ArmCard from "./WorkCards/Arm"
import CcCard from "./WorkCards/Cc"
import OthersCard from "./WorkCards/Others"

export default () => {
  return (
    <MasonryGrid>
      <IpccCard />
      <ArmCard />
      <OctopusCard />
      <CcCard />
      <OthersCard />
    </MasonryGrid>
  )
}
