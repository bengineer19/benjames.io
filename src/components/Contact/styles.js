import styled from "styled-components"

export const Email = styled.a`
  display: block;
  font-family: "Lato", sans-serif;
  margin: 50px;
  color: white;
  font-size: 4em;
  font-weight: 600;
  word-wrap: break-word;

  text-decoration: none;

  @media (max-width: 700px) {
    font-size: 2em;
  }
`

export const ContactText = styled.div`
  font-family: "Lato", sans-serif;
  margin: 0 50px 30px;
  color: white;
  font-size: 1.3em;
  font-weight: 300;
`

export const ProfilesWrapper = styled.div`
  margin: 0 50px 10px;

  display: flex;
  justify-content: left;
`

export const ProfileSVG = styled.a`
  display: block;
  height: 50px;
  margin: 0 10px;

  svg {
    height: 100%;
  }

  path {
    fill: white;
    stroke: white;
  }
`
