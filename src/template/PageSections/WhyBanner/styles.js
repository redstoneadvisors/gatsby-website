import styled from "styled-components";
export const Container = styled.div`
  h2 {
    width: max-content;
    margin: 0 auto;
    color: #c7ae86;
    font-family: "PT serif";
    font-weight: 600;
    font-style: italic;
    font-size: 28px;
    position: relative;
    top: 50px;
    position: relative;
    &:before {
      content: "";
      background: #131315;
      position: absolute;
      top: -75px;
      left: 50%;
      transform: translateX(-50%);
      height: 3px;
      width: 80%;
    }
  }
  margin-bottom: 50px;
`;
