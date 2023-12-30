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
      Made cool PCBs for boring companies.
      {/* Worked on 12 projects for different clients, writing full-stack & embedded
      software, and designing electronics. */}
    </CardText>
  </LinkedCard>
)
