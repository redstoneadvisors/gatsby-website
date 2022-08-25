import styled from "styled-components";

export const Container = styled.footer`
  background-color: #c4c4c4;
  margin: 0;
  padding: 80px;
  color: #707070;
  h2 {
    color: #131315;
    font-family: "PT Serif", serif;
    font-size: 20px;
    font-weight: bold;
  }
`;
export const Top = styled.div``;
export const Middle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
export const MidLeft = styled.div`
  div {
    display: flex;
    align-items: center;
  }
  ul {
    list-style: none;
    display: flex;
    gap: 1rem;
    li {
      white-space: nowrap;
    }
  }
`;
export const MidRight = styled.div`
  justify-self: center;
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
`;
