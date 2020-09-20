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
  <LinkedCard
    href="https://github.com/bengineer19/benjames.io"
    cardColor="cardGreyMid"
  >
    <CardTitle>This site</CardTitle>
    <CardDescription>
      A mobile responsive portfolio site with minimal dependencies
    </CardDescription>
    {/* https://carbon.now.sh/ */}
    <CardImg src="TheMetaTheBetter.png" alt="React code for portfolio site" />
    <CardFooter>
      <CardTag>Gatsby &nbsp;&&nbsp; Styled Components</CardTag>
      <CardAction>View on GitHub ➜</CardAction>
    </CardFooter>
  </LinkedCard>
)
