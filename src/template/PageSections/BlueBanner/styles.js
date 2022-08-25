import styled from "styled-components";

export const Container = styled.section`
  background-color: #86a1c3;
  position: relative;
`;
export const Inner = styled.div`
  max-width: 1515px;
  margin: 0 auto;
  color: white;

  padding: 150px 100px;
  text-align: center;
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
`;
export const Ellipsis = styled.div`
  position: absolute;
  ${({ position }) =>
    position === "top" ? `top:30px; left:0` : "bottom:30px; right:0;"}
`;
