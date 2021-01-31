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
  flex-basis: 550px;
  flex-grow: ${props => (props.grow ? 1 : 0)};
  height: 100%;
  position: relative;
`

export const BannerIntro = styled.div`
  flex-basis: ${props => props.width || "200px"};
  position: relative;
  overflow: hidden;

  margin-left: 20px;

  transition: all 0.5s ease;
  ${Card}:hover & {
    transform: scale(1.05);
  }
`

export const BannerLink = styled.a`
  display: block;
  font-family: "Lato", sans-serif;
  font-weight: ${props => props.fontWeight || 400};
  font-size: ${props => props.fontSize || "2em"};
  color: ${props => props.color || "#4d143b"};

  text-align: center;
  margin: 20px;

  transition: all 0.5s ease;
  ${Card}:hover & {
    transform: translate3D(15px, 0, 0);
  }

  @media (max-width: ${props => props.theme.projectGridBreakpoint}) {
    font-size: 1.2rem;
  }
`

export const BannerIcon = styled.div`
  width: ${props => props.width || "200px"};
  display: block;
  margin: auto;

  path {
    fill: ${props => props.fill};
    stroke: ${props => props.stroke};
  }
`

export const BannerTitle = styled.div`
  text-align: center;

  font-family: "Lato", sans-serif;
  font-weight: ${props => props.fontWeight || 400};
  font-size: ${props => props.fontSize || "1em"};
  color: ${props => props.color || "#4d143b"};
`

export const Banner = ({ children, cardColor, href }) => (
  <NonStyledAnchor href={href} target="_blank">
    <BannerCard cardColor={cardColor}>{children}</BannerCard>
  </NonStyledAnchor>
)
