import React from "react"
import styled from "styled-components"

import ProjectImg from "./ProjectImg"

export const Card = styled.div`
  background-color: ${props => props.theme.cardColors[props.cardColor]};
  display: inline-block;
  font-family: "Montserrat", sans-serif;
  margin: 0 0 2em;
  width: 100%;
`

const CardImgWrapper = styled.div`
  max-width: ${props => props.widthPercent || 80}%;
  /* max-width: 80%; */
  transition: transform 0.3s ease !important;
  padding: 10px ${props => (100 - (props.widthPercent || 80)) / 2}%;
  /* padding: 10px 10%; */

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

export const CardTitle = styled.div`
  color: ${props => props.theme.cardTextTheme.title};
  font-weight: 600;
  font-size: 2.5em;
  text-align: center;

  margin: 0;
  padding: 20px 20px 10px;

  @media (max-width: ${props => props.theme.projectGridBreakpoint}) {
    font-size: 2em;
  }

  transition: all 0.3s ease;
  ${Card}:hover & {
    transform: translate3D(0, -5px, 0);
  }
`

export const CardDescription = styled.div`
  color: ${props => props.theme.cardTextTheme.text};
  font-weight: 200;
  font-size: 1.5em;
  text-align: center;
  padding: 10px;

  transition: all 0.3s ease;
  ${Card}:hover & {
    transform: translate3D(0, -8px, 0);
  }
`

export const CardFooter = styled.div`
  color: ${props => props.theme.cardTextTheme.text};
  font-weight: 400;
  font-size: 1.25em;
  text-align: center;
  padding: 20px 10px 20px;
  background-color: rgba(0, 0, 0, 0.07);
  overflow: hidden;
  position: relative;

  transition: all 0.3s ease;
  ${Card}:hover & {
    background-color: rgba(0, 0, 0, 0.15);
  }
`

export const CardTag = styled.div`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;

  transition: all 0.3s ease;
  ${Card}:hover & {
    transform: translate3D(0, 200%, 0);
  }
`

export const CardAction = styled.div`
  transform: translate3D(0, -200%, 0);

  transition: all 0.3s ease;
  ${Card}:hover & {
    transform: translate3D(0, 0, 0);
  }
`

export const ProjectCard = ({ children, cardColor, href }) => {
  return (
    <a href={href} target="blank">
      <Card cardColor={cardColor}>{children}</Card>
    </a>
  )
}
