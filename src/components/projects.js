import React from "react"
import styled from "styled-components"

import { Vst4freeCard } from "./projectCards/vst4free"
import { ChargerCard } from "./projectCards/charger"
import { PodcastCard } from "./projectCards/podcast"
import { GestureCard } from "./projectCards/gesture"
import { PortfolioCard } from "./projectCards/portfolio"
import { ChessboardCard } from "./projectCards/chessboard"

const MasonryGrid = styled.div`
  column-count: 2;
  column-gap: 2em;
  margin: 0 1em 0;

  /* One col on smaller screens */
  @media (max-width: ${props => props.theme.projectGridBreakpoint}) {
    column-count: 1;
  }
`

export const Projects = () => {
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
