import React from "react"

import { Card } from "../Card"
import { Email, ContactText, ProfileSVG, ProfilesWrapper } from "./styles"
import GitHubSVG from "../../assets/github.svg"
import LinkedinSVG from "../../assets/linkedin.svg"

export default () => (
  <Card cardColor="cardMaroon">
    <Email href="mailto:ben@benjames.io">ben@benjames.io</Email>

    <ProfilesWrapper>
      <ProfileSVG target="_blank" href="https://github.com/bengineer19">
        <GitHubSVG />
      </ProfileSVG>
      <ProfileSVG
        target="_blank"
        href="https://www.linkedin.com/in/bengineer19/"
      >
        <LinkedinSVG />
      </ProfileSVG>
    </ProfilesWrapper>

    <ContactText>Don't be a stranger - I'd love to chat</ContactText>
  </Card>
)
