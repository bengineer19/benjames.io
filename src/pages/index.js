import React from "react"
import styled from "styled-components"

import SEO from "../components/Seo"
import Projects from "../components/Projects"
import Hero from "../components/Hero/Hero"
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
        <SectionTitle>Projects</SectionTitle>
        <Projects />
        {/* <SectionTitle>Blog</SectionTitle> */}
        <BlogPromo />
        <SectionTitle>Work</SectionTitle>
        <SectionTitle>Say hi</SectionTitle>
        Don't be a stranger.
      </Container>
    </>
  )
}
