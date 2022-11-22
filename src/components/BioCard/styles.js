import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 470px;
  background-color: #c7ae86;
  margin-bottom: 115px;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
    transition: 0.1s all ease-in-out;
  }
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.4);
  /* background-image: repeating-linear-gradient(
    #c7ae86 0px,
    #c7ae86 24px,
    rgba(124, 78, 41, 0.2) 25px
  ); */
`;
export const Headshot = styled.img`
  display: block;
  width: 100%;
`;
export const Name = styled.h3`
  color: white;
  font-family: "PT Serif", serif;
  font-weight: 600;
  font-size: 24px;
  padding: 1rem 1rem 0rem 2rem;
  margin: 0;
`;
export const Position = styled.h4`
  padding: 0 1rem 2rem 2rem;
  font-family: "PT Serif", serif;
  font-weight: 500;
  font-size: 16px;
  color: rgba(124, 78, 41, 0.7);
`;
export const ModalBody = styled.div`
  display: grid;
  grid-template-columns: minmax(300px, 500px) 2fr;
  font-family: "PT Serif", serif;
`;
export const Left = styled.div`
  img {
    display: block;
    width: 80%;
    height: 100%;
    object-fit: contain;
    margin: 0 auto;
  }
`;
export const Right = styled.div`
  padding: 50px 95px 50px 95px;
  max-height: 75vh;
  overflow: scroll;
  h1 {
    width: max-content;
    font-size: 31px;
    font-weight: bold;
    position: relative;
    &:after {
      content: "";
      background: #c7ae86;
      position: absolute;
      bottom: -10px;
      left: 0;
      height: 3px;
      width: 100%;
    }
  }
  h2 {
    font-size: 24px;
    font-weight: 600;
    color: #4c4e56;
    margin-bottom: 30px;
  }
  p {
    color: #707070;
    font-size: 16px;
    line-height: 1.5;
  }
  strong {
    font-size: 24px;
    font-weight: 600;
    color: #4c4e56;
  }
`;
export const Border = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: -15px;
  left: -15px;
  border: 5px solid black;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.4);
`;
