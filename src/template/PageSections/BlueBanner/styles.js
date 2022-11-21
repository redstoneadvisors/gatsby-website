import styled from "styled-components";

export const Container = styled.section`
  background-color: #86a1c3;
  position: relative;
  overflow: hidden;
`;
export const Inner = styled.div`
  max-width: 1515px;
  margin: 0 auto;
  color: white;

  padding: 100px 100px;
  text-align: center;
  @media screen and (max-width: 800px) {
    padding: 100px 30px;
  }
`;
export const Quote = styled.h2`
  font-size: 32px;
  font-family: "PT Serif", serif;
  font-style: italic;
  color: white;
  padding: 0 0 0 0;
  opacity: 0.9;
`;
export const Author = styled.p`
  text-align: center;
  opacity: 0.7;
  color: rgb(92, 112, 137);
`;
export const Ellipsis = styled.div`
  position: absolute;
  ${({ position }) =>
    position === "top" ? `top:30px; left:0` : "bottom:30px; right:0;"}
  img {
    height: 30px;
  }
`;

export const Compass = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
  opacity: 0.1;
  height: 100%;

  img {
    height: 100%;
  }
`;
