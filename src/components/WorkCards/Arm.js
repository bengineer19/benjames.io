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
import ArmSVG from "../../assets/arm.svg"

const ArmBlackSVG = Styled.div`
  path{
    stroke: #333E48;
    fill: #333E48;
  }
`

export default () => (
  <LinkedCard cardColor="cardGreen">
    <CardTitle></CardTitle>
    <CardImgWrapper widthPercent="50">
      <ArmBlackSVG>
        <ArmSVG />
      </ArmBlackSVG>
    </CardImgWrapper>
    <CardDescription>
      Developed technology for automatically provisioning edge compute nodes
      using Kubernetes
    </CardDescription>
  </LinkedCard>
)
