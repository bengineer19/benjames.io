import React from "react"
import styled from "styled-components"

import SEO from "../components/seo"
import Projects from "../components/Projects"
import Hero from "../components/Hero/Hero"
import SectionTitle from "../components/SectionTitle"

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
        <SectionTitle>Projects</SectionTitle>
        <Projects />
        <SectionTitle>Blog</SectionTitle>
        These are just a few of my favourite projects. Check out my blog
        <SectionTitle>Work</SectionTitle>
        <SectionTitle>Skills/About?</SectionTitle>
        Self taught programmer
        <SectionTitle>Contact</SectionTitle>
      </Container>
    </>
  )
}
