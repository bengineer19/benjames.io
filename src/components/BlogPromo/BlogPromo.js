import React from "react"

import { SVGWrapper, Scroll } from "./styles"
import { Banner, BannerText } from "../Banner"
import BrowserSVG from "../../assets/browser.svg"
import PostsSVG from "../../assets/posts.svg"

export default () => (
  <Banner cardColor="cardMaroon" href="https://blog.benjames.io">
    <SVGWrapper>
      {/* Don't add extra space for line descenders */}
      <BrowserSVG style={{ display: "block" }} />
      <Scroll>
        <PostsSVG />
        <PostsSVG />
        <PostsSVG />
      </Scroll>
    </SVGWrapper>
    <BannerText fontWeight="300">
      Check out my blog for more projects ➜
    </BannerText>
  </Banner>
)
