import React from "react"
import styled, { ThemeProvider } from "styled-components"

import { cardTextDark } from "../../../theme"

import { NonStyledAnchor, CardTitle, Card, CardText } from "../Card"
import AxleSVG from "../../assets/axle_logo.svg"

const LogoWrapper = styled.div`
  max-width: 40%;
  padding: 0px 30%;

  g {
    transition: all 0.4s ease !important;
  }

  ${Card}:hover & {
    /* #spoke-1 {
      transform: translateX(42%) translateY(42%);
    }
    #spoke-2 {
      transform: translateX(42%) translateY(-42%);
    }
    #spoke-3 {
      transform: translateX(-42%) translateY(42%);
    }
    #spoke-4 {
      transform: translateX(-42%) translateY(-42%);
    } */
    #spoke-1 {
      transform: translateX(-5%) translateY(-5%);
    }
    #spoke-2 {
      transform: translateX(-5%) translateY(5%);
    }
    #spoke-3 {
      transform: translateX(5%) translateY(-5%);
    }
    #spoke-4 {
      transform: translateX(5%) translateY(5%);
    }
  }
`

export default () => (
  <ThemeProvider theme={{ cardTextTheme: cardTextDark }}>
    <NonStyledAnchor href="https://axle.energy" target="_blank">
      <Card
        style={{
          backgroundImage:
            "radial-gradient( circle at top left, #ffeeee, #f5e9e9)",
        }}
      >
        <CardTitle
          style={{
            fontFamily: "Space Grotesk",
            fontWeight: "400",
            color: "#111111",
          }}
        >
          Axle Energy
        </CardTitle>

        <LogoWrapper>
          <AxleSVG />
        </LogoWrapper>

        <CardText>Decarbonising the grid.</CardText>
      </Card>
    </NonStyledAnchor>
  </ThemeProvider>
)
