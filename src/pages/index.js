import React from "react"
import styled from "styled-components"

import SEO from "../components/Seo"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero/Hero"
import Projects from "../components/Projects"
import Work from "../components/Work"
import Writing from "../components/Writing"
import Contact from "../components/Contact/Contact"
import SectionTitle from "../components/SectionTitle"

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const Spacer = styled.div`
  height: 20px;
  background-color: ${props => props.theme.themeColors.greyLight};
`

export default () => {
  return (
    <>
      <SEO />
      <Spacer />
      <Navbar />
      <Hero />
      <Container>
        <SectionTitle>Work</SectionTitle>
        <Work />
        <SectionTitle>Projects</SectionTitle>
        <Projects />
        <SectionTitle>Writing</SectionTitle>
        <Writing />
        <SectionTitle>Say hi</SectionTitle>
        <Contact />
      </Container>
    </>
  )
}
