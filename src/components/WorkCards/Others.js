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
  <LinkedCard cardColor="cardGreyMid">
    <CardTitle></CardTitle>
    <CardImgWrapper widthPercent="50"></CardImgWrapper>
    <CardDescription>
      Other companies - Circling/scrolling/animated logos
    </CardDescription>
  </LinkedCard>
)
