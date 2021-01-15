import React from "react"

import { LinkedCard, CardSVGWrapper, CardText, SpacerLine } from "../Card"
import CcSVG from "../../assets/cambridgeconsultants.svg"

export default () => (
  <LinkedCard
    cardColor="cardHenna"
    href="https://www.cambridgeconsultants.com/"
  >
    <CardSVGWrapper widthPercent="60">
      <CcSVG />
    </CardSVGWrapper>

    <SpacerLine>_</SpacerLine>

    <CardText>
      Tech consultant on 12 projects for various clients, focusing on energy,
      robotics & recycling sectors.
      {/* Worked on 12 projects for different clients, writing full-stack & embedded
      software, and designing electronics. */}
    </CardText>
  </LinkedCard>
)
