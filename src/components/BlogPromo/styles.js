import Styled, { keyframes } from "styled-components"

import { Card } from "../Card"

export const NonStyledAnchor = Styled.a`
  text-decoration: none;
`

export const BlogText = Styled.div`
  font-family: "Lato", sans-serif;
  font-size: 2em;
  color: white;
  flex-basis: 550px;
  flex-align: center;
  margin: 20px;

  transition: all 0.5s ease;
  ${Card}:hover & {
    transform: translate3D(15px, 0, 0);
  }
`

export const BlogCard = Styled(Card)`
  margin: 0 1em 0;
  padding: 1em;
  width: calc(100% - 4em);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`

export const SVGWrapper = Styled.div`
  flex-basis: 250px;
  position: relative;
  overflow: hidden;

  fill: #a6ddff;

  rect, path {
    stroke: #a6ddff;
  }

  transition: all 0.5s ease;
  ${Card}:hover & {
    transform: scale(1.02);
  }
`

const scrollAnimation = keyframes`
  100% { 
    -webkit-transform: translateY(-252%);  
  }
`

export const Scroll = Styled.div`
  position: absolute;
  height: 100%;

  width: 85%;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;

  transform: translate3d(0, 0, 0);
  animation: ${scrollAnimation} 8s linear infinite;
`
