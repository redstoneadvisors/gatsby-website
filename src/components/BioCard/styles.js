import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 470px;
  background-color: #c7ae86;
  margin-bottom: 115px;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
    transition: 0.1s all ease-in-out;
  }
`;
export const Headshot = styled.img`
  display: block;
  width: 100%;
`;
export const Name = styled.h3`
  color: white;
  font-family: "PT Serif", serif;
  font-weight: bold;
  font-size: 24px;
  padding: 1rem 1rem 0rem 1rem;
`;
export const Position = styled.h4`
  padding: 0 1rem 1rem 1rem;
  font-family: "PT Serif", serif;
  font-weight: bold;
  font-size: 16px;
  color: #131315;
`;
export const ModalBody = styled.div`
  display: grid;
  grid-template-columns: minmax(300px, 500px) 2fr;
  font-family: "PT Serif", serif;
`;
export const Left = styled.div`
  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const Right = styled.div`
  padding: 95px;
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
    margin-bottom: 60px;
  }
  p {
    color: #707070;
    font-size: 20px;
  }
  strong {
    font-size: 24px;
    font-weight: 600;
    color: #4c4e56;
  }
`;
