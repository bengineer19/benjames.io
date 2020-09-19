import React from "react"

import {
  ProjectCard,
  CardTitle,
  CardImg,
  CardDescription,
  CardFooter,
  CardTag,
  CardAction,
} from "../Card"

export default () => (
  <ProjectCard
    href="https://distinguisheddevs.com/"
    cardColor="distinguishedDevsPrimary"
  >
    <CardTitle>Distinguished Devs</CardTitle>
    <CardDescription>
      I host a podcast which interviews software engineering leaders
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
  </ProjectCard>
)
