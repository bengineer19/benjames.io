import React from "react"
import styled from "styled-components"

import { Card } from "./Card"
import ProjectImg from "../ProjectImg"

export const CardImgWrapper = styled.div`
  max-width: ${props => props.widthPercent || 80}%;
  transition: transform 0.3s ease !important;
  padding: 10px ${props => (100 - (props.widthPercent || 80)) / 2}%;

  ${Card}:hover & {
    transform: scale(1.05);
  }
`

export const CardImg = ({ children, ...props }) => {
  return (
    <CardImgWrapper widthPercent={props.widthPercent}>
      <ProjectImg {...props}></ProjectImg>
    </CardImgWrapper>
  )
}

export const SVGWrapper = styled.div`
  margin-top: 20px;

  path {
    stroke: ${props => props.color || "white"};
    fill: ${props => props.color || "white"};
  }
`

export const CardSVGWrapper = ({ children, color, ...props }) => (
  <CardImgWrapper {...props}>
    <SVGWrapper color={color}>{children}</SVGWrapper>
  </CardImgWrapper>
)
