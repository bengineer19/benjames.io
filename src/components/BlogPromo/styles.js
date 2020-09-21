import styled, { keyframes } from "styled-components"

import { BannerIcon } from "../Banner"

export const SVGWrapper = styled(BannerIcon)`
  fill: #a6ddff;

  rect,
  path {
    stroke: #a6ddff;
  }
`

const scrollAnimation = keyframes`
  100% { 
    -webkit-transform: translateY(-252%);  
  }
`

export const Scroll = styled.div`
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
