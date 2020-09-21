import React from "react"

import { Banner, BannerIcon, BannerText } from "../Banner"
import TheRegisterSVG from "../../assets/the_register.svg"

export default () => (
  <Banner
    cardColor="cardBlueLight"
    href="https://www.theregister.com/2020/01/27/webassembly_intro/"
  >
    <BannerIcon width="150px">
      <TheRegisterSVG />
    </BannerIcon>
    <BannerText color="#4d143b" fontSize="1.5em" grow>
      What is WebAssembly? And can you really compile C/C++ to it? ➜
    </BannerText>
  </Banner>
)
