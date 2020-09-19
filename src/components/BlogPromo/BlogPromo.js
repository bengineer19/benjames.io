import React from "react"

import {
  BlogText,
  BlogCard,
  SVGWrapper,
  Scroll,
  NonStyledAnchor,
} from "./styles"
import BrowserSVG from "../../assets/browser.svg"
import PostsSVG from "../../assets/posts.svg"

export default () => {
  return (
    <NonStyledAnchor href="https://blog.benjames.io" target="blank">
      <BlogCard cardColor="cardMaroon" href="https://blog.benjames.io">
        <SVGWrapper>
          {/* Don't add extra space for line descenders */}
          <BrowserSVG style={{ display: "block" }} />
          <Scroll>
            <PostsSVG />
            <PostsSVG />
            <PostsSVG />
          </Scroll>
        </SVGWrapper>
        <BlogText>
          <div>Check out my blog for more projects ➜</div>
        </BlogText>
      </BlogCard>
    </NonStyledAnchor>
  )
}
