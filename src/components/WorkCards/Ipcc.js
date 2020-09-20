import React from "react"
import Styled, { keyframes } from "styled-components"

import {
  LinkedCard,
  CardTitle,
  CardImgWrapper,
  CardDescription,
  CardFooter,
  CardTag,
  CardAction,
} from "../Card"
import IpccSVG from "../../assets/ipcc.svg"
import IcebergSVG from "../../assets/iceberg_alone.svg"
import SeaSVG from "../../assets/sea.svg"

const WhiteSVG = Styled.div`
  path{
    stroke: white;
    fill: white;
  }
`

const SVGWrapper = Styled.div`
  position: relative;
  overflow: hidden;
  height: 250px;
`

const seaAnimation = keyframes`
  0%, 100% {
    /* -webkit-transform: translateY(0); */
    -webkit-transform: translateX(0);
    -webkit-transform: scale(1);
  }
  50% {
    -webkit-transform: translateX(-50px);
    -webkit-transform: scale(1.05);
    /* -webkit-transform: translateY(-5px); */
  }
`

const SeaWrapper = Styled.div`
  position: relative;
  padding-top: 40px;
  width: 150%;

  animation: ${seaAnimation} 8s ease infinite;
`

const icebergAnimation = keyframes`
  0%, 100% {
    -webkit-transform: translateY(0);  
  }
  50% {
    -webkit-transform: translateY(10px);  
  }
`

const Iceberg = Styled(IcebergSVG)`
  position: absolute;
  top: 0;
  left: 10%;
  width: 20%;

  animation: ${icebergAnimation} 5s cubic-bezier(.38,.19,.69,.87) infinite;
`

export default () => (
  <LinkedCard cardColor="ipccBlue">
    <CardTitle></CardTitle>
    <CardImgWrapper widthPercent="40">
      <WhiteSVG>
        <IpccSVG />
      </WhiteSVG>
    </CardImgWrapper>

    <SVGWrapper>
      <Iceberg />
      <SeaWrapper>
        <SeaSVG />
      </SeaWrapper>

      {/* <SVGBottomText>
      </SVGBottomText> */}
    </SVGWrapper>
    {/* <CardDescription>
      <IcebergSVG />
      Working on the sixth assessment report (AR6)
    </CardDescription> */}
  </LinkedCard>
)
