import React from "react"
import styled from "styled-components"

const Header = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-weight: 800;
  font-size: 6em;
  color: black;
  margin: 0 5px 5px;
  z-index: 1000;

  @media (max-width: ${props => props.theme.projectGridBreakpoint}) {
    font-size: 4.5em;
  }
`

export default ({ children }) => {
  return <Header>{children}</Header>
}
