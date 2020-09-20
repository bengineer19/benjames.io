import React from "react"

import { LinkedCard, CardSVGWrapper, CardText } from "../Card"
import CcSVG from "../../assets/cambridgeconsultants.svg"

export default () => (
  <LinkedCard cardColor="cardHenna">
    <CardSVGWrapper widthPercent="50">
      <CcSVG />
    </CardSVGWrapper>

    <CardText>
      Worked on 15 projects, writing full-stack and embedded software, designing
      and building electronics, and producing reports for clients
    </CardText>
  </LinkedCard>
)
