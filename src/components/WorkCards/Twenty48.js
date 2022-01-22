import React from "react"
import { ThemeProvider } from "styled-components"

import { cardTextDark } from "../../../theme"

import { LinkedCard, CardSVGWrapper, CardText, SpacerLine } from "../Card"
import Twenty48SVG from "../../assets/logo_2048.svg"

export default () => (
  <ThemeProvider theme={{ cardTextTheme: cardTextDark }}>
    <LinkedCard cardColor="cardBeige" href="https://2048.vc">
      <CardSVGWrapper widthPercent="50" color="#550000">
        <Twenty48SVG />
      </CardSVGWrapper>

      <SpacerLine lineColor="grey">_</SpacerLine>

      <CardText>Helping vet and source Climate startups</CardText>
    </LinkedCard>
  </ThemeProvider>
)
