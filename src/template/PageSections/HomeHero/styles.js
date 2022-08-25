import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 33% 66%;
  height: 100vh;
  max-height: 1080px;
`;

export const Left = styled.div`
  background-image: url(${(props) => props.background});
  background-color: #4c4e56;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Right = styled.div`
  background-image: url(${(props) => props.background});
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;
export const Intro = styled.h2`
  font-family: "PT Serif", serif;
  font-size: 39px;
  color: #131315;
  font-weight: 600;
  margin: 0;
  margin-bottom: 1rem;
`;
export const SubIntro = styled.h3`
  font-family: "PT Serif", serif;
  font-size: 24px;
  color: #131315;
  font-weight: 100;
  padding-bottom: 3rem;
`;
export const Tagline = styled.h3`
  font-family: "PT Serif", serif;
  color: #cccccc;
  font-style: italic;
  font-size: 25px;
  font-weight: 200;
  padding-top: 6rem;
`;
export const Graphic = styled.div`
  /* position: absolute;

  top: 0;
  left: 0; */
  /* width: 100%;
  height: 100%; */
  /* img {
    object-fit: cover;
    object-position: center;
  } */
`;
