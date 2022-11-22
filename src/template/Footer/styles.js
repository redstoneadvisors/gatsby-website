import styled from "styled-components";

export const Container = styled.footer`
  background-color: #c4c4c4;
  margin: 0;
  padding: 80px;
  width: 100%;
  @media screen and (max-width: 800px) {
    padding: 80px 20px;
  }
  color: #707070;
  h2 {
    color: #131315;
    font-family: "PT Serif", serif;
    font-size: 20px;
    font-weight: bold;
  }
`;
export const Top = styled.div`
  img {
    max-width: 100%;
  }
  margin-bottom: 25px;
  @media screen and (max-width: 800px) {
    margin-bottom: 25px;
  }
`;
export const Middle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    margin-bottom: 25px;
  }
`;
export const MidLeft = styled.div`
  p {
    margin-bottom: 25px;
  }
  div {
    @media screen and (max-width: 800px) {
      flex-direction: column;
      align-items: flex-start;
      margin-bottom: 25px;
    }
  }
  ul {
    padding: 0;
    list-style: none;
    display: flex;
    @media screen and (max-width: 800px) {
      flex-direction: column;
    }
    gap: 1rem;
    li {
      white-space: nowrap;
      font-weight: 600;
    }
  }
`;
export const MidRight = styled.div`
  justify-self: center;
  @media screen and (max-width: 800px) {
    justify-self: flex-start;
    margin-bottom: 25px;
  }
  div {
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
  }
  svg {
    margin-right: 25px;
    path {
      fill: #707070;
    }
  }
`;
export const Bottom = styled.div`
  border-top: 1px solid #707070;
  padding: 1rem 0 0 0;
  a {
    color: #707070;
    text-decoration: underline;
    margin-right: 10px;
    &:hover {
      color: black;
      text-decoration: underline;
    }
  }
  div {
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
    a {
      margin-bottom: 6px;
      font-weight: 600;
    }
  }
`;
