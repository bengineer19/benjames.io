import React from "react"
import styled from "styled-components"

import { LinkedCard, CardSVGWrapper, CardText, Card } from "../Card"
import CcSVG from "../../assets/cambridgeconsultants.svg"

const SpacerLine = styled.div`
  text-align: center;
  font-family: "Montserrat", sans-serif;
  font-size: 4em;
  color: white;
  padding: 0px 20px 20px;

  transition: transform 0.3s ease;

  ${Card}:hover & {
    transform: scale(1.1);
  }
`

export default () => (
  <LinkedCard
    cardColor="cardHenna"
    href="https://www.cambridgeconsultants.com/"
  >
    <CardSVGWrapper widthPercent="60">
      <CcSVG />
    </CardSVGWrapper>

    <SpacerLine>_</SpacerLine>

    <CardText>
      Worked on 15 projects for different clients, writing full-stack & embedded
      software, and designing electronics.
    </CardText>
  </LinkedCard>
)
