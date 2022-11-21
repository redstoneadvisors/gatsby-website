import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 100px;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding-bottom: 200px;
  img {
    width: 100%;
  }
`;

export const Title = styled.h1`
  margin-top: 100px;
  font-size: 60px;
  font-family: "PT Serif", serif;
  font-weight: bold;
  width: max-content;
  position: relative;
  &:after {
    content: "";
    background: #c7ae86;
    position: absolute;
    bottom: -10px;
    left: 0;
    height: 8px;
    width: 100%;
  }
`;
export const Description = styled.h2`
  color: #c4c4c4;
  font-size: 18px;
  font-family: "PT Serif", serif;
  margin-bottom: 50px;
  @media screen and (max-width: 1080px) {
    font-size: 16px;
  }
`;
export const Quote = styled.p`
  padding: 25px 30px;
  max-width: 900px;
  text-align: center;
  font-size: 20px;
  font-family: "PT Serif", serif;
  color: #888888;
  font-style: italic;
  line-height: 40px;
  font-weight: 100;
  @media screen and (max-width: 1080px) {
    font-size: 18px;
  }
`;

export const Accent = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  clip-path: polygon(0 0, 30% 0, 0 100%, 0% 100%);
  background-color: #86a1c3;
`;
