import React from "react"

import { MasonryGrid } from "./Masonry"
import Plugins4freeCard from "./ProjectCards/Plugins4free"
import ChargerCard from "./ProjectCards/Charger"
import PodcastCard from "./ProjectCards/Podcast"
import GestureCard from "./ProjectCards/Gesture"
import PortfolioCard from "./ProjectCards/Portfolio"
import ChessboardCard from "./ProjectCards/Chessboard"

export default () => {
  return (
    <MasonryGrid>
      <Plugins4freeCard />
      <ChargerCard />
      <ChessboardCard />
      <PodcastCard />
      <PortfolioCard />
      <GestureCard />
    </MasonryGrid>
  )
}
