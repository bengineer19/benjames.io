import React from "react"

import {
  Banner,
  BannerIcon,
  BannerText,
  BannerLink,
  BannerTitle,
  BannerIntro,
} from "../Banner"
import StackOverflowSVG from "../../assets/wired.svg"

export default () => (
  <Banner
    cardColor="cardBlueLight"
    href="https://www.wired.co.uk/article/perennial-carbon-capture-satellite"
  >
    <BannerIntro>
      <BannerIcon width="125px" style={{ paddingTop: "8px" }}>
        <StackOverflowSVG />
      </BannerIcon>
    </BannerIntro>

    <BannerText grow>
      <BannerLink fontSize="1.5em">
        Sustainable Farming Has an Unlikely Ally: Satellites ➜
      </BannerLink>
    </BannerText>
  </Banner>
)
