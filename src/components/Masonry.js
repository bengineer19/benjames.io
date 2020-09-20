import styled from "styled-components"

export const MasonryGrid = styled.div`
  column-count: 2;
  column-gap: 2em;
  margin: 0 1em 0;

  /* One col on smaller screens */
  @media (max-width: ${props => props.theme.projectGridBreakpoint}) {
    column-count: 1;
  }
`
