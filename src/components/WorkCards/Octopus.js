import React from "react"
import styled from "styled-components"

import { LinkedCard, CardSVGWrapper, CardText, Card } from "../Card"
import ProjectImg from "../ProjectImg"
import OctoSVG from "../../assets/octopusev.svg"

const OctoWrapper = styled.div`
  max-width: 40%;
  transition: transform 0.3s ease !important;
  padding: 10px 30%;

  ${Card}:hover & {
    transform: rotate(-5deg) scale(1.05);
  }
`

export default () => (
  <LinkedCard cardColor="octopusBlue" href="https://octopusev.com">
    {/* // <PictureCard> */}
    <CardSVGWrapper widthPercent="50" color="white">
      <OctoSVG />
    </CardSVGWrapper>

    <OctoWrapper>
      <ProjectImg src="octopus_crop.webp" />
    </OctoWrapper>
    <CardText>Created OEV's inventory & pricing platform.</CardText>
  </LinkedCard>
)
