import React from "react"
import styled, { ThemeProvider } from "styled-components"

import { cardTextDark } from "../../../theme"

import {
  Card,
  LinkedCard,
  CardTitle,
  CardDescription,
  CardFooter,
  CardTag,
  CardAction,
} from "../Card"

import CCSSVG from "../../assets/uk_heating.svg"

export const SVGColorWrapper = styled.div`
  margin-top: 5px;
`

const LogoWrapper = styled.div`
  max-width: 40%;
  transition: transform 0.3s ease !important;
  padding: 10px 33%;

  ${Card}:hover & {
    transform: scale(1.08);
  }
`

export default () => (
  <ThemeProvider theme={{ cardTextTheme: cardTextDark }}>
    <LinkedCard cardColor="cardBlueVeryLight" href="https://www.ukheating.app/">
      <CardTitle>Future UK Heating</CardTitle>
      <CardDescription>
        An interactive back-of-the-envelope model of a decarbonised UK heating
        system.
      </CardDescription>

      <LogoWrapper>
        <SVGColorWrapper>
          <CCSSVG />
        </SVGColorWrapper>
      </LogoWrapper>

      <CardFooter>
        <CardTag>Pandas, React & Redux</CardTag>
        <CardAction>View Site ➜</CardAction>
      </CardFooter>
    </LinkedCard>
  </ThemeProvider>
)
