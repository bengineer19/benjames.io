import React from "react"
import styled from "styled-components"

import { SVGWrapper, Scroll } from "./styles"
import { BannerText, BannerLink, BannerIntro } from "../Banner"
import { Card, NonStyledAnchor } from "../Card"
import BrowserSVG from "../../assets/browser.svg"
import PostsSVG from "../../assets/posts.svg"

const ColourMotionCard = styled(Card)`
  margin: 0 1em 10px;
  padding: 1em;
  width: calc(100% - 4em);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  box-shadow: 5px 5px 16px rgba(0, 0, 0, 0.3);

  background-size: 300% 300%;
  background-image: linear-gradient(
    -45deg,
    #0080ff 0%,
    #0080ff 25%,
    #4730c9 100%
  );
  -webkit-animation: AnimateBG 7s ease infinite;
  animation: AnimateBG 7s ease infinite;

  @-webkit-keyframes AnimateBG {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @keyframes AnimateBG {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`

export default () => (
  <NonStyledAnchor href="https://climate.benjames.io" target="_blank">
    <ColourMotionCard>
      <BannerIntro>
        <SVGWrapper>
          <BrowserSVG style={{ display: "block" }} />
          <Scroll>
            <PostsSVG />
            <PostsSVG />
            <PostsSVG />
          </Scroll>
        </SVGWrapper>
      </BannerIntro>
      <BannerText grow>
        <BannerLink fontSize="1.8em" color="white">
          I write a personal blog on climate and decarbonisation ➜
        </BannerLink>
      </BannerText>
    </ColourMotionCard>
  </NonStyledAnchor>
)
