import React from "react"
import styled from "styled-components"

import { LinkedCard } from "../Card"
import { BannerLink } from "../Banner"

const SpacedBannerLink = styled(BannerLink)`
  padding: 43px 10px 43px;
`

export default () => (
  <LinkedCard cardColor="cardGreyLight" href="https://blog.benjames.io">
    <SpacedBannerLink fontSize="1.3em" color="#333333">
      More nerd projects in my tech archive 🤓 ➜
    </SpacedBannerLink>
  </LinkedCard>
)
