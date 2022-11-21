import styled from "styled-components";

export const Container = styled.div`
  margin: 0 80px;
  margin-top: 200px;
  margin-bottom: 200px;
  @media screen and (max-width: 1080px) {
    margin: 0;
  }
`;
export const Background = styled.div`
  background-color: #4c4e56;
  display: grid;
  grid-template-columns: 1fr max-content 1fr;
  column-gap: 2rem;
  padding: 75px;
  @media screen and (max-width: 1080px) {
    grid-template-columns: 1fr;
    row-gap: 74px;
  }
`;
export const Intro = styled.div`
  text-align: center;
`;
export const Accent = styled.div`
  width: 3px;
  height: 100%;
  background-color: white;
  @media screen and (max-width: 1080px) {
    width: 100%;
    height: 3px;
  }
`;
export const Title = styled.div`
  font-family: "PT Serif", serif;
  font-size: 59px;
  font-weight: bold;
  padding: 0 30px;
  @media screen and (max-width: 1080px) {
    font-size: 50px;
  }
`;
export const Description = styled.div`
  color: #888888;
  font-family: "PT Serif", serif;
  font-size: 24px;
  margin-bottom: 80px;
  @media screen and (max-width: 1080px) {
    font-size: 18px;
  }
`;
export const Left = styled.div`
  form {
    display: flex;
    flex-direction: column;
  }
  label {
    color: white;
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
    font-weight: 500;
  }
  input,
  textarea {
    color: #4c4e56;
    border: none;
    padding: 5px 10px;
    max-width: 595px;
  }
  textarea {
    height: 160px;
    resize: none;
  }
`;
export const Right = styled.div`
  h3 {
    color: #c7ae86;
    font-family: "PT Serif", serif;
    font-size: 42px;
    font-weight: bold;
  }
  h4 {
    padding-top: 30px;
    color: #c7ae86;
    font-family: "PT Serif", serif;
    font-size: 30px;
    font-weight: bold;
  }
  span {
    color: white;
    font-weight: 300;
    font-size: 18px;
    font-weight: 500;
    display: flex;
    margin-bottom: 1rem;
  }
  div {
    display: flex;
    width: 100%;
    max-width: 400px;
    justify-content: space-between;
  }
  img {
    width: 25px;
    margin-right: 25px;
  }
  justify-self: center;
  @media screen and (max-width: 1080px) {
  }
  justify-self: flex-start;
  }
`;
export const Submit = styled.button`
  background: none;
  border: none;
  color: white;
  position: relative;
  width: max-content;
  margin-top: 1rem;
  cursor: pointer;
  &:before {
    content: "";
    background: #c7ae86;
    position: absolute;
    bottom: -10px;
    left: 0;
    height: 3px;
    width: 100%;
  }
  &:hover {
    color: #c7ae86;
  }
`;
