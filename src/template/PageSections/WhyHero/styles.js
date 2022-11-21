import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  height: 100vh;
  @media screen and (max-width: 925px) {
    grid-template-columns: 1fr;
    position: relative;
  }
`;

export const Left = styled.div`
  background-color: rgba(134, 166, 195, 0.75);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0;
  position: relative;
  z-index: 99;
  @media screen and (max-width: 925px) {
    position: absolute;
    bottom: 0;
    padding: 50px 0;
  }
`;
export const Right = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  @media screen and (max-width: 925px) {
    grid-row: 1;
  }
  img {
    height: 100%;
    @media screen and (max-width: 925px) {
      object-fit: cover;
    }
    object-fit: contain;
  }
`;
export const Title = styled.h1`
  font-size: 60px;
  font-family: "PT Serif", serif;
  font-weight: 700;
  color: white;
  position: relative;
  width: max-content;
  margin: 0 30px;
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
  font-size: 20px;
  font-style: italic;
  font-family: "PT Serif", serif;
  margin: 3rem 30px 0 30px;
`;
export const Quote = styled.p`
  padding: 0 30px;
  color: #c0d2ea;
  font-size: 16px;
  font-style: italic;
  margin-bottom: 20px;
  font-family: "PT Serif", serif;
`;
