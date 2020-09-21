import React from "react"

import { LinkedCard, CardTitle, SpacerLine, CardDescription } from "../../Card"
import { CarouselWrapper, LogosLine } from "./styles"
import Logos from "./Logos"

export default () => (
  <LinkedCard cardColor="cardGreyMid">
    <CardTitle>Other Companies</CardTitle>
    <CardDescription>
      I love seeing how different tech companies operate, so I've done some
      shorter placements at other firms too.
    </CardDescription>

    <SpacerLine>_</SpacerLine>

    <CarouselWrapper>
      <LogosLine>
        <Logos />
        <Logos />
      </LogosLine>
    </CarouselWrapper>
  </LinkedCard>
)
