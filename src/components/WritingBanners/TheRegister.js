import React from "react"

import {
  Banner,
  BannerIcon,
  BannerText,
  BannerLink,
  BannerTitle,
  BannerIntro,
} from "../Banner"
import TheRegisterSVG from "../../assets/the_register.svg"

export default () => (
  <Banner
    cardColor="cardBlueLight"
    href="https://www.theregister.com/2020/01/27/webassembly_intro/"
  >
    <BannerIntro>
      <BannerIcon width="75px" fill="#ff0000" stroke="#ff0000">
        <TheRegisterSVG />
      </BannerIcon>
      <BannerTitle>The Register</BannerTitle>
    </BannerIntro>
    <BannerText grow>
      <BannerLink fontSize="1.5em">
        What is WebAssembly? And can you really compile C/C++ to it? ➜
      </BannerLink>
    </BannerText>
  </Banner>
)
