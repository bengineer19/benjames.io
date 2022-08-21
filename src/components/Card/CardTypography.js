import styled from "styled-components"

import { Card } from "./Card"

export const CardText = styled.div`
  color: ${props => props.theme.cardTextTheme.text};
  font-weight: 200;
  text-align: center;
  padding: 5px 20px 20px;

  transition: transform 0.3s ease;
  ${Card}:hover & {
    transform: translate3D(0, 5px, 0);
  }

  font-size: 1.5em;
  @media (max-width: ${props => props.theme.projectGridBreakpoint}) {
    font-size: 1.25em;
  }
`

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
  font-weight: 300;
  text-align: center;
  padding: 10px;

  transition: transform 0.3s ease;
  ${Card}:hover & {
    transform: translate3D(0, -8px, 0);
  }

  font-size: 1.5em;
  @media (max-width: ${props => props.theme.projectGridBreakpoint}) {
    font-size: 1.25em;
  }
`

export const SpacerLine = styled.div`
  text-align: center;
  font-family: "Montserrat", sans-serif;
  font-size: 4em;
  color: ${props => props.lineColor || "white"};
  padding: 0px 20px 20px;

  transition: transform 0.3s ease;

  ${Card}:hover & {
    transform: scale(1.1);
  }
`
