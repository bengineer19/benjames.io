import React from "react"
import styled, { ThemeProvider } from "styled-components"

import { cardTextDark } from "../../../theme"

import {
  ProjectCard,
  CardTitle,
  CardImg,
  CardDescription,
  CardFooter,
  CardTag,
  CardAction,
} from "../Card"

// Background doesn't need to be darkened quite as much for orange card - override
const CardFooterLightened = styled(CardFooter)`
  background-color: rgba(0, 0, 0, 0.04);
`

export default () => (
  <ThemeProvider theme={{ cardTextTheme: cardTextDark }}>
    <ProjectCard cardColor="cardOrange">
      <CardTitle>Gesture Control</CardTitle>
      <CardDescription>
        Controlling linux with a swish and flick
      </CardDescription>
      <CardImg
        src="gesture/gesture_transparent_bg_compressed.png"
        alt="Gesture control"
        widthPercent="60"
      />
      <CardFooterLightened>
        <CardTag>C++ &emsp;|&emsp; Bash</CardTag>
        <CardAction>Read more</CardAction>
      </CardFooterLightened>
    </ProjectCard>
  </ThemeProvider>
)
