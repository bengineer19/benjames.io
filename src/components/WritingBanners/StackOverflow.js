import React from "react"

import { Banner, BannerIcon, BannerText } from "../Banner"
import StackOverflowSVG from "../../assets/stackoverflow.svg"

export default () => (
  <Banner
    cardColor="cardBlueLight"
    href="https://stackoverflow.blog/2020/05/14/the-most-successful-developers-share-more-than-they-take/"
  >
    <BannerIcon width="150px">
      <StackOverflowSVG />
    </BannerIcon>
    <BannerText color="#4d143b" fontSize="1.5em" grow>
      The most successful developers share more than they take ➜
    </BannerText>
  </Banner>
)
