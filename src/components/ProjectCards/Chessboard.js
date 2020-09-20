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
  <LinkedCard cardColor="cardPurple">
    <CardTitle>IoT Chessboard</CardTitle>
    <CardDescription>Play chess online using a real board</CardDescription>
    <CardImg
      src="chessboard/chessboard_cutout_compressed.png"
      alt="IoT Chessboard"
      widthPercent="70"
    />
    <CardFooter>
      <CardTag>Mentor PADs &nbsp;&&nbsp; Python</CardTag>
      <CardAction>Read More</CardAction>
    </CardFooter>
  </LinkedCard>
)
