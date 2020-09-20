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
import OctoSVG from "../../assets/octopusev.svg"

const WhiteSVG = Styled.div`
  path{
    stroke: white;
    fill: white;
  }
`

export default () => (
  <LinkedCard cardColor="octopusBlue">
    <CardTitle></CardTitle>
    <CardImgWrapper widthPercent="50">
      <WhiteSVG>
        <OctoSVG />
      </WhiteSVG>
    </CardImgWrapper>
    <CardDescription>
      I created the pricing platform now used for all external and internal
      websites and quotes, saving days of time every week. Car animation?
    </CardDescription>
  </LinkedCard>
)
