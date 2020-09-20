import Styled, { keyframes } from "styled-components"

import IcebergSVG from "../../../assets/iceberg.svg"

export const WhiteSVG = Styled.div`
  path{
    stroke: white;
    fill: white;
  }
`

export const SVGWrapper = Styled.div`
  position: relative;
  overflow: hidden;
`

const seaAnimation = keyframes`
  0%, 100% {
    transform: translate3D(0, 0, 0) scale(1);
  }
  50% {
    transform: translate3D(-5%, 2%, 0) scale(1.1, 1);
  } 
`

export const SeaWrapper = Styled.div`
  position: relative;
  padding-top: 40px;
  width: 110%;

  #sea {
    display: block;
  }

  animation: ${seaAnimation} 8s ease infinite;
`

const icebergAnimation = keyframes`
  0%, 100% {
    -webkit-transform: translateY(0);  
  }
  50% {
    -webkit-transform: translateY(10px);  
  }
`

export const Iceberg = Styled(IcebergSVG)`
  position: absolute;
  top: 0;
  left: 10%;
  width: 25%;

  animation: ${icebergAnimation} 5s cubic-bezier(.38,.19,.69,.87) infinite;
`

export const SVGBottomText = Styled.div`
  position: absolute;
  width: 100%;
  bottom: 20px;
`
