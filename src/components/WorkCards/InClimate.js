import React from "react"
import styled from "styled-components"

import { NonStyledAnchor, CardTitle, Card, CardText } from "../Card"
import InClimateSVG from "../../assets/inclimate_logo.svg"

const LogoWrapper = styled.div`
  max-width: 40%;
  padding: 0px 30%;

  g {
    transition: all 0.4s ease !important;
  }

  ${Card}:hover & {
    #Arrow {
      transform: translateX(-6%);
    }
    #C_bottom,
    #C_top {
      transform: translateX(6%);
    }
  }
`

export default () => (
  <NonStyledAnchor href="https://inclimate.co" target="_blank">
    <Card
      style={{
        backgroundImage:
          "radial-gradient( circle at top left, #ff4265, #f09819 )",
      }}
    >
      <CardTitle style={{ fontFamily: "Poppins", fontWeight: "600" }}>
        InClimate
      </CardTitle>

      <LogoWrapper>
        <InClimateSVG />
      </LogoWrapper>

      <CardText>
        Helping awesome early-career individuals kickstart their career in
        Climate Tech.
      </CardText>
    </Card>
  </NonStyledAnchor>
)
