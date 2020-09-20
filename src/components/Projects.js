import React from "react"

import { MasonryGrid } from "./Masonry"
import Vst4freeCard from "./ProjectCards/Vst4free"
import ChargerCard from "./ProjectCards/Charger"
import PodcastCard from "./ProjectCards/Podcast"
import GestureCard from "./ProjectCards/Gesture"
import PortfolioCard from "./ProjectCards/Portfolio"
import ChessboardCard from "./ProjectCards/Chessboard"

export default () => {
  return (
    <MasonryGrid>
      <Vst4freeCard />
      <ChargerCard />
      <ChessboardCard />
      <PodcastCard />
      <PortfolioCard />
      <GestureCard />
    </MasonryGrid>
  )
}
