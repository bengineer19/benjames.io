import React from "react"
import styled from "styled-components"

import { Card, NonStyledAnchor } from "./Card"

export const BannerCard = styled(Card)`
  margin: 0 1em 10px;
  padding: 1em;
  width: calc(100% - 4em);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`

export const BannerText = styled.div`
  font-family: "Lato", sans-serif;
  font-weight: ${props => props.fontWeight || 400};
  font-size: ${props => props.fontSize || "2em"};
  color: ${props => props.color || "white"};
  flex-basis: 550px;
  flex-grow: ${props => (props.grow ? 1 : 0)};
  text-align: center;

  margin: 20px;

  transition: all 0.5s ease;
  ${Card}:hover & {
    transform: translate3D(15px, 0, 0);
  }
`

export const BannerIcon = styled.div`
  flex-basis: ${props => props.width || "250px"};
  position: relative;
  overflow: hidden;

  /* fill: white; */

  transition: all 0.5s ease;
  ${Card}:hover & {
    transform: scale(1.02);
  }
`

export const Banner = ({ children, cardColor, href }) => (
  <NonStyledAnchor href={href} target="blank">
    <BannerCard cardColor={cardColor}>{children}</BannerCard>
  </NonStyledAnchor>
)
