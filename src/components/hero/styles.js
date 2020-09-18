import styled from "styled-components"
import { motion } from "framer-motion"

export const Maroon = styled.div`
  background-color: #4d143b;
  margin-bottom: 10vh;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
`

export const FancyIntroText = styled.div`
  color: #a6ddff;

  width: 100%;
  flex-basis: 850px;

  padding-left: 20px;
  padding-right: 15px;
  text-align: right;
  font-family: "Montserrat", sans-serif;

  h1 {
    font-size: 6em;
    font-weight: 500;
    font-family: serif;
    margin-top: 20px;
  }
  p {
    font-size: 1.5em;
    font-weight: 200;
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
  }
`)
