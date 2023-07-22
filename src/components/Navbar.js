import React from "react"
import styled from "styled-components"

const Navbar = styled.nav`
  position: -webkit-sticky;
  position: sticky;
  top: 0;

  background-color: ${props => props.theme.themeColors.greyLight};

  text-align: center;
  z-index: 1000;

  ul {
    margin: 0px;
    padding: 15px;
  }

  li {
    display: inline-block;
  }

  .navlink {
    text-decoration: none;
    color: ${props => props.theme.themeColors.greyDeep};
    font-weight: 500;
    font-family: "Montserrat", sans-serif;
    font-size: 1.1em;
    padding: 10px 30px;
  }

  #pulsing-button {
    border-radius: 5px;

    background-size: 300% 300%;
    background-image: linear-gradient(
      -45deg,
      #c2d9ff 0%,
      #c2d9ff 25%,
      #9790e8 100%
    );
    -webkit-animation: AnimateBG 10s ease infinite;
    animation: AnimateBG 10s ease infinite;

    @-webkit-keyframes AnimateBG {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }

    @keyframes AnimateBG {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
  }
`

export default () => {
  return (
    <Navbar>
      <ul>
        <li>
          <a class="navlink" href="/">
            HOME
          </a>
        </li>
        <li>
          <a
            id="pulsing-button"
            class="navlink"
            href="https://climate.benjames.io/"
          >
            CLIMATE WRITING ➜
          </a>
        </li>
      </ul>
    </Navbar>
  )
}
