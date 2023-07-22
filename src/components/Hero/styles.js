import styled from "styled-components"
import { motion } from "framer-motion"

export const HeroBG = styled.div`
  background-color: ${props => props.theme.themeColors.greyLight};
  margin-bottom: 100px;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
`

export const FancyIntroText = styled.div`
  color: ${props => props.theme.themeColors.greyDeep};

  width: 100%;
  flex-basis: 850px;

  padding-left: 20px;
  padding-right: 15px;
  text-align: right;
  font-family: "Montserrat", sans-serif;

  h1 {
    font-size: 6em;
    font-weight: 400;
    /* font-style: italic; */
    /* font-family: "Libre Baskerville", serif; */
    font-family: "Playfair Display", serif;
    margin-top: 20px;
  }
  p {
    font-size: 1.36em;
    font-weight: 400;
  }

  @media (max-width: ${props => props.theme.projectGridBreakpoint}) {
    h1 {
      font-size: 3.5em;
    }
    p {
      font-size: 1.2em;
    }
  }
`

export const HeroImg = motion.custom(styled.div`
  flex-basis: 270px;
  width: 100%;
  max-width: 400px;
  flex-grow: 1;
  bottom: -100px;

  position: relative;
  padding: 0 5vh;

  @media (max-width: ${props => props.theme.projectGridBreakpoint}) {
    margin-top: -80px;
  }
`)
