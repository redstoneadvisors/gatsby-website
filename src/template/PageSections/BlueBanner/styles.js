import styled from "styled-components";

export const Container = styled.section`
  background-color: #86a1c3;
  position: relative;
  overflow: hidden;
`;
export const Inner = styled.div`
  max-width: 1650px;
  margin: 0 auto;
  color: white;

  padding: 60px 50px 40px 50px ;
  text-align: center;
  @media screen and (max-width: 800px) {
    padding: 40px 30px;
  }
`;
export const Quote = styled.h2`
  font-size: 23px;
  font-family: "Cinzel",serif;
  font-style: italic;
  color:rgba(255,255,255,.8);
  padding: 0 0 0 0;
  max-width: 80%;
  @media screen and (max-width: 800px) {
    max-width: 100%;
  }
  margin: 0 auto;
  opacity: 0.9;
`;
export const Author = styled.p`
  text-align: center;
  padding-top: 10px;
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
