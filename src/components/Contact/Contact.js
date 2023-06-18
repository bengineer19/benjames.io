import React, { useEffect, useState } from "react"

import { Card } from "../Card"
import { Email, ContactText, ProfileSVG, ProfilesWrapper } from "./styles"
import GitHubSVG from "../../assets/github.svg"
import LinkedinSVG from "../../assets/linkedin.svg"

export default () => {
  const [email, setEmail] = useState(0)

  // Prevent email being rendered immediately, to prevent some scrapers
  useEffect(() => {
    setEmail("ben@benjames.io")
  }, [])

  return (
    <Card cardColor="cardMaroon">
      <Email href={`mailto:${email}`}>{email}</Email>

      <ProfilesWrapper>
        <ProfileSVG
          target="_blank"
          href="https://www.linkedin.com/in/ben-james-climate"
        >
          <LinkedinSVG />
        </ProfileSVG>
        <ProfileSVG target="_blank" href="https://github.com/bengineer19">
          <GitHubSVG />
        </ProfileSVG>
      </ProfilesWrapper>

      <ContactText>Don't be a stranger - I'd love to chat</ContactText>
    </Card>
  )
}
