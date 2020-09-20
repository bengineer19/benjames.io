import React from "react"
import Styled from "styled-components"

import {
  LinkedCard,
  CardTitle,
  CardImgWrapper,
  CardDescription,
  CardFooter,
  CardTag,
  CardAction,
} from "../Card"
import CcSVG from "../../assets/cambridgeconsultants.svg"

const ArmBlackSVG = Styled.div`
  path{
    stroke: #white;
    fill: #white;
  }
`

export default () => (
  <LinkedCard cardColor="cardHenna">
    <CardTitle></CardTitle>
    <CardImgWrapper widthPercent="50">
      <ArmBlackSVG>
        <CcSVG />
      </ArmBlackSVG>
    </CardImgWrapper>
    <CardDescription>
      Worked on 15 projects, writing full-stack and embedded software, designing
      and building electronics, and producing reports for clients
    </CardDescription>
  </LinkedCard>
)
