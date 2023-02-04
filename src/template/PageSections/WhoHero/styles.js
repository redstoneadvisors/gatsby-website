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
  justify-content: center;
  padding: 0 30px 0 80px;
  /* padding-left: 80px; */
`;

export const Right = styled.div`
position: relative;
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
  margin-top: 3rem;
  font-family: "PT Serif", serif;
  font-size: 18px;
  max-width: 450px;

  color: #757575;
  line-height: 40px;
  @media screen and (max-width: 1080px) {
    font-size: 18px;
  }
  display: flex;
  flex-direction: column;

&:last-child{
  span{

    font-weight: 500;
    
  }

}
  
`;
export const Quote = styled.p`
position: absolute;
top: 60%;
left:50%;
width: 100%;
transform: translateX(-50%);
  font-style: italic;
  font-family: "PT Serif", serif;
  font-size: 20px;
  color: #c0c0c0;
  line-height: 20px;
  z-index: 99;
  background: rgba( 255, 255, 255, 0.5 );
backdrop-filter: blur( 20px );
-webkit-backdrop-filter: blur( 20px );
box-shadow: 0 8px 32px 0 rgba( 0, 0, 0, 0.37 );
border: 1px solid rgba( 255, 255, 255, 0.18 );
  padding: 2.5rem 3rem;
p{
  &:first-of-type{
    width: max-content;
    padding: 0;
    margin: 0;
  margin: 0 auto;
    text-transform: uppercase;
    color: #7B4E29;
    margin-bottom:2rem;
    font-style: normal;
    font-weight: bold;
    font-family: "PT Serif", serif;
    position: relative;
    &:after {
    content: "";
    background: #7B4E29;
    position: absolute;
    bottom: -8px;
    left: 0;
    height: 2px;
    width: 100%;
  }
  }
  &:nth-last-of-type(2){
    color: #7B4E29;
    padding: 0;
    font-family: "PT Serif", serif;
    width: max-content;
    margin: 0 auto;
  }
  &:last-of-type{
    color: #7B4E29;
    margin: 0 auto !important;
    width: max-content;
    font-size: 14px;
    padding: 0;
    padding-top:1rem;
    margin: 0;
    font-style: normal;
    font-family: "PT Serif", serif;
  }
}
`;
