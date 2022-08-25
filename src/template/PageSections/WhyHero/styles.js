import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  height: 100%;
`;

export const Left = styled.div`
  background-color: #86a1c3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 0px 0 80px;
  position: relative;
  z-index: 99;
`;
export const Right = styled.div`
  position: relative;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    display: block;
  }
`;
export const Title = styled.h1`
  font-size: 60px;
  font-family: "PT Serif", serif;
  font-weight: 700;
  color: white;
  position: relative;
  width: max-content;
  &:after {
    content: "";
    background: #465569;
    position: absolute;
    bottom: -10px;
    left: 0;
    height: 8px;
    width: 100%;
  }
`;
export const Description = styled.h2`
  color: white;
  font-size: 25px;
  font-style: italic;
  font-family: "PT Serif", serif;
`;
export const Quote = styled.p`
  margin-right: -100px;
  color: #c0d2ea;
  font-size: 25px;
  font-style: italic;
  margin-bottom: 100px;
  font-family: "PT Serif", serif;
`;

export const Accent = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  clip-path: polygon(0 0, 30% 0, 0 100%, 0% 100%);
  background-color: #86a1c3;
`;
