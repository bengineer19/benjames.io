import React from "react"
import styled from "styled-components"

import Vst4freeCard from "./ProjectCards/Vst4free"
import ChargerCard from "./ProjectCards/Charger"
import PodcastCard from "./ProjectCards/Podcast"
import GestureCard from "./ProjectCards/Gesture"
import PortfolioCard from "./ProjectCards/Portfolio"
import ChessboardCard from "./ProjectCards/Chessboard"

const MasonryGrid = styled.div`
  column-count: 2;
  column-gap: 2em;
  margin: 0 1em 0;

  /* One col on smaller screens */
  @media (max-width: ${props => props.theme.projectGridBreakpoint}) {
    column-count: 1;
  }
`

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
