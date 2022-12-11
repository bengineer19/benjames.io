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
    href="https://distinguisheddevs.com/"
    cardColor="distinguishedDevsPrimary"
  >
    <CardTitle>Distinguished Devs</CardTitle>
    <CardDescription>
      I hosted a podcast that interviewed software engineering leaders
    </CardDescription>
    <CardImg
      src="distinguished_devs_logo.png"
      alt="Distinguished Devs logo"
      widthPercent="30"
    />
    <CardFooter>
      <CardTag>On Spotify, iTunes and the rest</CardTag>
      <CardAction>View Site ➜</CardAction>
    </CardFooter>
  </LinkedCard>
)
