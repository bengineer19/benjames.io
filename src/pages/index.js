import React from "react"
import styled from "styled-components"

import SEO from "../components/Seo"
import Hero from "../components/Hero/Hero"
import Projects from "../components/Projects"
import Work from "../components/Work"
import Writing from "../components/Writing"
import Contact from "../components/Contact/Contact"
import SectionTitle from "../components/SectionTitle"
import BlogPromo from "../components/BlogPromo/BlogPromo"

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

export default () => {
  return (
    <>
      <SEO />
      <Hero />
      <Container>
        <SectionTitle>Work</SectionTitle>
        <Work />
        <SectionTitle>Projects</SectionTitle>
        <Projects />
        <BlogPromo />
        <SectionTitle>Writing</SectionTitle>
        <Writing />
        <SectionTitle>Say hi</SectionTitle>
        <Contact />
      </Container>
    </>
  )
}
