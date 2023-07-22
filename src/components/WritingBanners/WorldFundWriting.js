import React from "react"
import styled from "styled-components"

import {
  Banner,
  BannerIcon,
  BannerText,
  BannerTitle,
  BannerIntro,
} from "../Banner"
import WorldfundSVG from "../../assets/worldfund.svg"
import WorldfundWordSVG from "../../assets/worldfund_word.svg"

const Link = styled.a`
  display: block;
  text-align: center;
  text-decoration: none;
  font-family: "Lato", sans-serif;
  font-weight: ${props => props.fontWeight || 400};
  font-size: ${props => props.fontSize || "2em"};
  color: ${props => props.color || "#4d143b"};

  padding-bottom: 5px;

  transition: all 0.5s ease;
  :hover {
    transform: translate3D(15px, 0, 0);
  }

  font-size: 1.5rem;
  @media (max-width: ${props => props.theme.projectGridBreakpoint}) {
    font-size: 1.2rem;
  }
`

export default () => (
  <Banner cardColor="cardBlueLight">
    <BannerIntro>
      <BannerIcon width="100px" fill="#21362F">
        <WorldfundSVG />
      </BannerIcon>
      <BannerIcon width="100px" fill="#21362F">
        <WorldfundWordSVG />
      </BannerIcon>
      {/* <BannerTitle>World Fund</BannerTitle> */}
    </BannerIntro>

    <BannerText grow>
      <Link
        target="_blank"
        href="WorldFund_Investment_Briefing_Electrofuels_for_Aviation.pdf"
      >
        The state of electrofuels for aviation ➜
      </Link>
      {/* <Link target="_blank" href="">
        Carbon removal (coming soon) ➜
      </Link> */}
    </BannerText>
  </Banner>
)
