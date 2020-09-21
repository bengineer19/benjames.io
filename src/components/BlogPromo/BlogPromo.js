import React from "react"

import { SVGWrapper, Scroll } from "./styles"
import { Banner, BannerText, BannerLink, BannerIntro } from "../Banner"
import BrowserSVG from "../../assets/browser.svg"
import PostsSVG from "../../assets/posts.svg"

export default () => (
  <Banner cardColor="cardMaroon" href="https://blog.benjames.io">
    <BannerIntro width="auto">
      <SVGWrapper>
        {/* Don't add extra space for line descenders */}
        <BrowserSVG style={{ display: "block" }} />
        <Scroll>
          <PostsSVG />
          <PostsSVG />
          <PostsSVG />
        </Scroll>
      </SVGWrapper>
    </BannerIntro>
    <BannerText>
      <BannerLink fontSize="1.8em" color="white">
        Check out my blog for more projects ➜
      </BannerLink>
    </BannerText>
  </Banner>
)
