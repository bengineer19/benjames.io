import React from "react"

import QualcommSVG from "../../../assets/qualcomm.svg"
import BoschSVG from "../../../assets/bosch.svg"
import VintenSVG from "../../../assets/vinten.svg"
import ArccSVG from "../../../assets/arcc.svg"
import BuzzflyerSVG from "../../../assets/buzzflyer.svg"
import { SVGLogoWrapper } from "./styles"

export default () => (
  <>
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
      <BoschSVG />
    </SVGLogoWrapper>

    <SVGLogoWrapper>
      <VintenSVG />
    </SVGLogoWrapper>
  </>
)
