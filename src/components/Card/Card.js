import React from "react"
import styled from "styled-components"

export const Card = styled.div`
  background-color: ${props => props.theme.cardColors[props.cardColor]};
  display: inline-block;
  font-family: "Montserrat", sans-serif;
  margin: 0 0 2em;
  width: 100%;
  overflow: hidden;
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

export const NonStyledAnchor = styled.a`
  text-decoration: none;
`

export const LinkedCard = ({ children, cardColor, href }) => (
  <NonStyledAnchor href={href} target="_blank">
    <Card cardColor={cardColor}>{children}</Card>
  </NonStyledAnchor>
)
