import React from "react"
import styled from "styled-components"

import { Projects } from "../components/projects"
import Hero from "../components/hero/hero"
import { SectionTitle } from "../components/sectionTitle"

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

export const IndexPage = () => {
  return (
    <>
      <Hero />
      <Container>
        <SectionTitle>Projects</SectionTitle>
        <Projects />
        <SectionTitle>Work</SectionTitle>
        <SectionTitle>Blog</SectionTitle>
        <SectionTitle>Skills</SectionTitle>
        <SectionTitle>Contact</SectionTitle>
      </Container>
    </>
  )
}

export default IndexPage
