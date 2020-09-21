import styled from "styled-components"

export const CarouselWrapper = styled.div`
  padding: 15px;
  /* overflow: hidden; */
`

export const LogosLine = styled.div`
  height: 40px;
  width: 5000px;
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
