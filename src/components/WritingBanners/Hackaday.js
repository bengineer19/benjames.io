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

const Link = styled.a`
  display: block;
  text-align: center;
  text-decoration: none;
  color: #4d143b;

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
      <BannerIcon width="120px">
        <HackadaySVG />
      </BannerIcon>
      <BannerTitle>
        Hackaday <br></br>(>60 posts on contract)
      </BannerTitle>
    </BannerIntro>

    <BannerText grow>
      <Link
        target="_blank"
        href="https://hackaday.com/2019/07/23/the-v-programming-language-vain-or-virtuous/"
      >
        The V programming language: Vain or Virtuous? ➜
      </Link>
      <Link
        target="_blank"
        href="https://hackaday.com/2018/12/18/thread-carefully-an-introduction-to-concurrent-python/"
      >
        Thread carefully: an introduction to concurrent Python ➜
      </Link>
      <Link
        target="_blank"
        href="https://hackaday.com/2020/07/29/ask-hackaday-why-did-github-ship-all-our-software-off-to-the-arctic/"
      >
        Why did GitHub ship all our software off to the arctic? ➜
      </Link>
      <Link
        target="_blank"
        href="https://hackaday.com/2020/06/29/does-php-have-a-future-or-are-twenty-five-years-enough/"
      >
        Does PHP have a future, or are twenty five years enough? ➜
      </Link>

      <br />
      <Link target="_blank" href="https://hackaday.com/author/benjames050418/">
        All posts ➜
      </Link>
    </BannerText>
  </Banner>
)
