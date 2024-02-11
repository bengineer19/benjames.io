import React from "react"

import { LinkedCard, CardTitle, SpacerLine, CardDescription } from "../../Card"
import { CarouselWrapper, LogosLine } from "./styles"
import Logos from "./Logos"

export default () => (
  <LinkedCard cardColor="cardGreyMid">
    <CardTitle>Other Companies</CardTitle>
    {/* <CardDescription>I used to do a lot of soldering</CardDescription> */}

    <SpacerLine>_</SpacerLine>

    <CarouselWrapper>
      <LogosLine>
        <Logos />
        <Logos />
      </LogosLine>
    </CarouselWrapper>
  </LinkedCard>
)
