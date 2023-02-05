import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 25% 75%;
  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
  height: 100vh;
  max-height: 1080px;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0));
  background-color: rgba(0, 0, 0, 0.3);
  position: relative;
  overflow: hidden;
  video {
    position: absolute;
    z-index: -1;
    width: 100%;
    object-fit: cover;
  }
`;
export const Topo = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.1;
  z-index: 0;

  object-fit: cover;
`;

export const Left = styled.div`
  /* background-image: url(${(props) => props.background}); */
  /* box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.7); */
  @media screen and (max-width: 1000px) {
    display: none;
  }
  /* margin-right: 3px;
  border-right: 3px solid rgba(199, 174, 134, 0.3); */
  position: relative;
  z-index: 2;
  img {
    opacity: 0.8;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: -2;
    height: 100%;
    width: 100%;
    background:linear-gradient(180deg, rgba(0,0,0,.9) 10%, rgba(0,0,0,0) 90%);
  }
`;

export const Right = styled.div`
  background-image: url(${(props) => props.background});
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 0 20px;
`;
export const Intro = styled.h2`
  font-family: "Cinzel", serif;
  font-size: 50px;
  color:  rgba(204, 204, 204, .9);
  font-weight: 600;
  margin: 0;
  padding-bottom: 1rem;
  text-align: center;
  line-height: 1.1;
  @media screen and (max-width: 1000px) {

  }
`;
export const SubIntro = styled.h3`
  font-family: "Cinzel", serif;
  font-size: 38px;
  color: rgba(204, 204, 204, .9);
  font-weight: 600;
  text-align: center;

`;
export const Tagline = styled.h3`
  font-family: "Cinzel", serif;
  color: rgba(204, 204, 204, 1);
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  padding-top: 1rem;
position: relative;
bottom: -60px;
  @media screen and (max-width: 1000px) {
    padding-left: 2rem;
    padding-right: 2rem;
    font-size: 20px;
  }
`;
export const Graphic = styled.div`

  img {
    rotate: 90deg;
    opacity: .7;
    display: block;
    width: 30%;
    margin: 4rem auto 2rem auto;
  }
`;

export const Border = styled.div`
/* border-left: 4px solid rgba(204, 204, 204, .3);
border-right: 4px solid  rgba(204, 204, 204, .3); */
/* padding: 6rem;
display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
`