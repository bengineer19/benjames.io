import React from "react"

import { LinkedCard, CardTitle } from "../../Card"
import { CarouselWrapper, LogosLine, SVGLogoWrapper } from "./styles"

import QualcommSVG from "../../../assets/qualcomm.svg"
import BoschSVG from "../../../assets/bosch.svg"
import VintenSVG from "../../../assets/vinten.svg"
import ArccSVG from "../../../assets/arcc.svg"
import BuzzflyerSVG from "../../../assets/buzzflyer.svg"

export default () => (
  <LinkedCard cardColor="cardGreyMid">
    <CardTitle>Other Companies</CardTitle>

    <CarouselWrapper>
      <LogosLine>
        <SVGLogoWrapper>
          <QualcommSVG />
        </SVGLogoWrapper>

        <SVGLogoWrapper>
          <ArccSVG />
        </SVGLogoWrapper>

        <SVGLogoWrapper>
          <BuzzflyerSVG />
        </SVGLogoWrapper>

        <SVGLogoWrapper>
          <VintenSVG />
        </SVGLogoWrapper>

        <SVGLogoWrapper>
          <BoschSVG />
        </SVGLogoWrapper>
      </LogosLine>
    </CarouselWrapper>
  </LinkedCard>
)
