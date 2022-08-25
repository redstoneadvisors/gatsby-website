import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 3fr 5fr;
  height: 100vh;
  max-height: 1080px;
  gap: 2rem;
`;
export const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 80px;
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
`;
export const Title = styled.h1`
  font-family: "PT Serif", serif;
  font-size: 60px;
  font-weight: 700;
  max-width: 180px;
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
  }
`;
export const Description = styled.p`
  margin-top: 1rem;
  font-family: "PT Serif", serif;
  font-size: 20px;
  max-width: 475px;
  color: #888888;
  line-height: 40px;
`;
