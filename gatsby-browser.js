import React from "react"
import { ThemeProvider } from "styled-components"

import GlobalStyle from "./globalStyles"
import theme from "./theme"

export const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {element}
    </ThemeProvider>
  )
}
