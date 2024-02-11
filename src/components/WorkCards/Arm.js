import React from "react"
import styled, { ThemeProvider } from "styled-components"

import { cardTextDark } from "../../../theme"

import { LinkedCard, CardSVGWrapper, Card, CardText } from "../Card"
import ProjectImg from "../ProjectImg"
import ArmSVG from "../../assets/arm.svg"

const ChipWrapper = styled.div`
  max-width: 20%;
  transition: transform 0.3s ease !important;
  padding: 10px 40%;

  ${Card}:hover & {
    transform: rotate(90deg);
  }
`

export default () => (
  <ThemeProvider theme={{ cardTextTheme: cardTextDark }}>
    <LinkedCard cardColor="cardGreen" href="https://arm.com">
      <CardSVGWrapper widthPercent="50" color="#333E48">
        <ArmSVG />
      </CardSVGWrapper>

      <ChipWrapper>
        <ProjectImg src="chip.png" />
      </ChipWrapper>

      <CardText>Data and AI engineering at Arm Research.</CardText>
    </LinkedCard>
  </ThemeProvider>
)
