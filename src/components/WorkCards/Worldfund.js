import React from "react"
import styled from "styled-components"

import { LinkedCard, CardSVGWrapper, CardText, Card } from "../Card"
import WorldfundSVG from "../../assets/worldfund.svg"
import WorldfundWordSVG from "../../assets/worldfund_word.svg"

const SVGColorWrapper = styled.div`
  margin-top: 5px;
`

const LogoWrapper = styled.div`
  max-width: 40%;
  transition: transform 0.3s ease !important;
  padding: 10px 33%;

  ${Card}:hover & {
    transform: rotate(10deg) scale(1.08);
  }
`

export default () => (
  <LinkedCard cardColor="cardGreyDeep" href="https://worldfund.vc">
    {/* // <PictureCard> */}
    <CardSVGWrapper widthPercent="65" color="white">
      <WorldfundWordSVG />
    </CardSVGWrapper>

    <LogoWrapper>
      <SVGColorWrapper>
        <WorldfundSVG />
      </SVGColorWrapper>
    </LogoWrapper>
    <CardText>
      Searched for the most ambitious climate startups in Europe.
    </CardText>
  </LinkedCard>
)
