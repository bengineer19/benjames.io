import React from "react"
import { ThemeProvider } from "styled-components"

import { cardTextDark } from "../../../theme"

import {
  LinkedCard,
  CardTitle,
  CardImg,
  CardDescription,
  CardFooter,
  CardTag,
  CardAction,
} from "../Card"

export default () => (
  <ThemeProvider theme={{ cardTextTheme: cardTextDark }}>
    <LinkedCard cardColor="cardGreen">
      <CardTitle>BatCap</CardTitle>
      <CardDescription>
        A smart charger/app that preserves your phone battery by cutting off at
        80%
      </CardDescription>
      <CardImg
        src="charger/charger_cutout_compressed.png"
        alt="BatCap smart phone charger"
      />
      <CardFooter>
        <CardTag>Arduino &nbsp;&&nbsp; Java</CardTag>
        <CardAction>Read more</CardAction>
      </CardFooter>
    </LinkedCard>
  </ThemeProvider>
)
