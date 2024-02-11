import React from "react"

import { LinkedCard, CardSVGWrapper, CardText } from "../../Card"
import { SVGWrapper, SeaWrapper, Iceberg, SVGBottomText } from "./styles.js"
import IpccSVG from "../../../assets/ipcc.svg"
import SeaSVG from "../../../assets/sea.svg"

export default () => (
  <LinkedCard cardColor="ipccBlue" href="https://ipcc.ch">
    <CardSVGWrapper widthPercent="35">
      <IpccSVG />
    </CardSVGWrapper>

    <SVGWrapper>
      <Iceberg />
      <SeaWrapper>
        <SeaSVG />
      </SeaWrapper>

      <SVGBottomText>
        <CardText>Worked on the IPCC's sixth assessment report.</CardText>
      </SVGBottomText>
    </SVGWrapper>
  </LinkedCard>
)
