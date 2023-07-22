import React from "react"
import styled from "styled-components"

import {
  Banner,
  BannerIcon,
  BannerText,
  BannerTitle,
  BannerIntro,
} from "../Banner"
import HackadaySVG from "../../assets/hackaday.svg"
import TheRegisterSVG from "../../assets/the_register.svg"
import StackOverflowSVG from "../../assets/stackoverflow.svg"

const IconsGroup = styled.div`
  flex-basis: 800px;
  flex-grow: 1
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`

const LineIcon = styled.a`
  flex-basis: ${props => props.width || "300px"};
  position: relative;
  overflow: hidden;

  margin-left: 20px;

  transition: all 0.5s ease;
  :hover {
    transform: scale(1.05);
  }
`

const TechDesc = styled.p`
  font-size: 1.15em;
  margin-block-start: 0px;
`

export default () => (
  <Banner cardColor="cardBlueLight">
    <TechDesc>
      Back in the day I wrote op-eds and coverage on the tech industry. Here are
      a few pieces.
    </TechDesc>

    <IconsGroup>
      <LineIcon
        href="https://hackaday.com/author/benjames050418/"
        target="_blank"
      >
        <BannerIcon width="100px">
          <HackadaySVG />
        </BannerIcon>
        <BannerTitle>
          Hackaday <br></br>(>60 posts on contract)
        </BannerTitle>
      </LineIcon>

      <LineIcon
        href="https://stackoverflow.blog/2020/05/14/the-most-successful-developers-share-more-than-they-take/"
        target="_blank"
      >
        <BannerIcon width="90px">
          <StackOverflowSVG />
        </BannerIcon>
        <BannerTitle>The StackOverflow Blog</BannerTitle>
      </LineIcon>

      <LineIcon
        href="https://www.theregister.com/2020/01/27/webassembly_intro/"
        target="_blank"
      >
        <BannerIcon width="95px" fill="#ff0000" stroke="#ff0000">
          <TheRegisterSVG />
        </BannerIcon>
        <BannerTitle>The Register</BannerTitle>
      </LineIcon>
    </IconsGroup>
  </Banner>
)
