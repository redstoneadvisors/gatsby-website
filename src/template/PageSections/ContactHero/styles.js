import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 3fr 5fr;
  height: 100vh;
  max-height: 1080px;
  gap: 2rem;
  @media screen and (max-width: 1080px) {
    grid-template-columns: 1fr;
    margin-top: 100px;
    gap: 0rem;
  }
`;
export const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 30px;
  /* padding-left: 80px; */
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
export const Hero = styled.div`
  width: 100%;
  position: relative;
`;
export const HeroImage = styled.img`
  width: 100%;
  position: relative;
  z-index: 1;
`;
export const HeroTexture = styled.img`
  width: 100%;
  position: absolute;
  bottom: -60px;
  right: -100px;
  z-index: 0;
  @media screen and (max-width: 1080px) {
    bottom: -30px;
    right: 0px;
  }
`;
export const Title = styled.h1`
  font-family: "PT Serif", serif;
  font-size: 60px;
  font-weight: 700;

  @media screen and (max-width: 1080px) {
    max-width: 100%;
  }
  line-height: 80px;
  position: relative;
  &:after {
    content: "";
    background: #c7ae86;
    position: absolute;
    bottom: -20px;
    left: 0;
    height: 8px;
    width: 50%;
    @media screen and (max-width: 1080px) {
      width: 90%;
    }
  }
`;
export const Description = styled.p`
  margin-bottom: 5rem;
  margin-top: 3rem;
  font-family: "PT Serif", serif;
  font-size: 20px;
  max-width: 475px;
  color: #c0c0c0;
  line-height: 40px;
  @media screen and (max-width: 1080px) {
    font-size: 18px;
  }
  display: flex;
  flex-direction: column;
  span {
  }
`;
export const Quote = styled.p`
  font-style: italic;
  font-family: "PT Serif", serif;
  font-size: 20px;
  color: #c0c0c0;
  line-height: 20px;
`;
