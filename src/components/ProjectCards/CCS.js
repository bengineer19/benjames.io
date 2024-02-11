import React from "react"
import styled, { ThemeProvider } from "styled-components"

import { cardTextDark } from "../../../theme"

import {
  Card,
  LinkedCard,
  CardTitle,
  CardImg,
  CardDescription,
  CardFooter,
  CardTag,
  CardAction,
} from "../Card"

import CCSSVG from "../../assets/ccs.svg"

export const SVGColorWrapper = styled.div`
  margin-top: 5px;
`

const LogoWrapper = styled.div`
  max-width: 40%;
  transition: transform 0.3s ease !important;
  padding: 10px 33%;

  ${Card}:hover & {
    transform: scale(1.08);
  }
`

export default () => (
  <LinkedCard cardColor="ccsTheme" href="https://cambridgeclimatesociety.com/">
    <CardTitle>Cambridge Climate Society</CardTitle>
    <CardDescription>
      I founded Cambridge Unviersity's Climate Society & grew it to {">"}1k
      members.
    </CardDescription>

    <LogoWrapper>
      <SVGColorWrapper>
        <CCSSVG />
      </SVGColorWrapper>
    </LogoWrapper>

    <CardFooter>
      <CardTag>Climate events, careers & mentorship</CardTag>
      <CardAction>Read more</CardAction>
    </CardFooter>
  </LinkedCard>
)
