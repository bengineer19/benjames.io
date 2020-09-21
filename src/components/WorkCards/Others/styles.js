import styled, { keyframes } from "styled-components"

export const CarouselWrapper = styled.div`
  margin: 20px;
  overflow: hidden;
`

const logoScroll = keyframes`
  100% {
    -webkit-transform: translateX(-995px);  
  }
`

export const LogosLine = styled.div`
  height: 40px;
  width: 2000px;

  animation: ${logoScroll} 8s linear infinite;
`

export const SVGLogoWrapper = styled.div`
  height: 100%;
  display: inline-block;
  padding: 0 10px;

  svg {
    height: 100%;
  }

  path {
    stroke: ${props => props.color || "white"};
    fill: ${props => props.color || "white"};
  }
`
