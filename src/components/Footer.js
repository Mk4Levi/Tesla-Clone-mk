import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

function Footer() {
  return (
    <Fade right>
      <FooterWrap>
        <a href="https://bhagyamudgal.github.io">Developed By Bhagya Mudgal</a>
      </FooterWrap>
    </Fade>
  );
}

export default Footer;

const FooterWrap = styled.div`
  min-height: 260px;
  max-width: 40px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 7px;
  right: 0.7%;
  background-color: lightblue;
  a {
    text-align: center;
    min-width: 290px;
    color: red;
    transform: rotate(90deg);
  }
`;
