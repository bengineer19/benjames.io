import React from "react"
import styled from "styled-components"

import { Banner, BannerIcon, BannerText } from "../Banner"
import { Card } from "../Card"
import HackadaySVG from "../../assets/hackaday.svg"

const BannerLinks = styled(BannerText)`
  ${Card}:hover & {
    transform: translate3D(0, 0, 0);
  }
`
const Link = styled.a`
  font-size: 1.5rem;
  display: block;

  text-decoration: none;
  color: #4d143b;

  transition: all 0.5s ease;
  :hover {
    transform: translate3D(15px, 0, 0);
  }
`

export default () => (
  <Banner cardColor="cardBlueLight">
    <BannerIcon width="120px">
      <HackadaySVG />
    </BannerIcon>

    <BannerLinks grow>
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
      All of HaD profile
    </BannerLinks>
  </Banner>
)
