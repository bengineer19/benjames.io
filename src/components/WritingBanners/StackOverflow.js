import React from "react"

import {
  Banner,
  BannerIcon,
  BannerText,
  BannerLink,
  BannerTitle,
  BannerIntro,
} from "../Banner"
import StackOverflowSVG from "../../assets/stackoverflow.svg"

export default () => (
  <Banner
    cardColor="cardBlueLight"
    href="https://stackoverflow.blog/2020/05/14/the-most-successful-developers-share-more-than-they-take/"
  >
    <BannerIntro>
      <BannerIcon width="90px">
        <StackOverflowSVG />
      </BannerIcon>
      <BannerTitle>The StackOverflow Blog</BannerTitle>
    </BannerIntro>

    <BannerText grow>
      <BannerLink fontSize="1.5em">
        The most successful developers share more than they take ➜
      </BannerLink>
    </BannerText>
  </Banner>
)
