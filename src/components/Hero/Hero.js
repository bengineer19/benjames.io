import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { motion } from "framer-motion"

import { Maroon, FancyIntroText, HeroImg } from "./styles"
import {
  heroTextMotion,
  heroTitleMotion,
  heroContainerMotion,
  heroImageMotion,
} from "./motion"

const getHeroImgQuery = graphql`
  query {
    file(relativePath: { eq: "Headshot cutout Ben James.png" }) {
      childImageSharp {
        fluid(maxHeight: 600) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`

export default () => {
  const data = useStaticQuery(getHeroImgQuery)

  return (
    <Maroon>
      <FancyIntroText>
        <motion.div
          variants={heroContainerMotion}
          initial="hidden"
          animate="show"
        >
          <motion.h1 variants={heroTitleMotion}>Hi, I'm Ben</motion.h1>
          <motion.p variants={heroTextMotion}>
            {/* Technology is my thing. When I'm not building it, I'm writing or
            talking about it. */}
            A few years ago, I dedicated my career to decarbonisation.
          </motion.p>
          <motion.p variants={heroTextMotion}>
            Previously I was an enthusiastic writer and reluctant engineer.
            {/* I'm fascinated with how climate change is going to reshape our
            world. */}
          </motion.p>
          <motion.p variants={heroTextMotion}>
            I also like pranks, and composing musical theatre.
            {/* Sometimes I produce music */}
          </motion.p>
        </motion.div>
      </FancyIntroText>

      <HeroImg
        alt="Ben James"
        initial="hidden"
        animate="show"
        variants={heroImageMotion}
      >
        <Img fluid={data.file.childImageSharp.fluid} />
      </HeroImg>
    </Maroon>
  )
}
