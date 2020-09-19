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
  <ProjectCard cardColor="cardPurple">
    <CardTitle>IoT Chessboard</CardTitle>
    <CardDescription>Play chess online using a real board</CardDescription>
    <CardImg
      src="chessboard/chessboard_cutout_compressed.png"
      alt="IoT Chessboard"
      widthPercent="70"
    />
    <CardFooter>
      <CardTag>Python &emsp;|&emsp; PCB design</CardTag>
      <CardAction>Read More</CardAction>
    </CardFooter>
  </ProjectCard>
)
