import React from "react"

import {
  ProjectCard,
  CardTitle,
  CardImg,
  CardDescription,
  CardFooter,
  CardTag,
  CardAction,
} from "./projectCard"

export const Vst4freeCard = () => (
  <ProjectCard href="https://vst4free.com" cardColor="cardRed">
    <CardTitle>VST4FREE</CardTitle>
    <CardDescription>
      A website for music producers, with around two million annual users
    </CardDescription>
    <CardImg src="vst4free_mockup.png" alt="VST4FREE showcase" />
    <CardFooter>
      <CardTag>Nuxt.js &emsp;|&emsp; GraphQL</CardTag>
      <CardAction>View Site ➜</CardAction>
    </CardFooter>
  </ProjectCard>
)
