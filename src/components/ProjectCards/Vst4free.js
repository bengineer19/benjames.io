import React from "react"

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
  <LinkedCard href="https://vst4free.com" cardColor="cardRed">
    <CardTitle>VST4FREE</CardTitle>
    <CardDescription>
      A website for music producers, with around two million annual users
    </CardDescription>
    <CardImg src="vst4free_mockup.png" alt="VST4FREE showcase" />
    <CardFooter>
      <CardTag>Nuxt.js &nbsp;&&nbsp; GraphQL</CardTag>
      <CardAction>View Site ➜</CardAction>
    </CardFooter>
  </LinkedCard>
)
