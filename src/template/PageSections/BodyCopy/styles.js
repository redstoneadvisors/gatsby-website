import styled from "styled-components";

export const Container = styled.div`
  margin: 200px 0 150px 0;
  p {
    max-width: 1290px;
    margin: 0 auto;
    font-family: "Open Sans", sans-serif;
    font-size: 22px;
    line-height: 2.5rem;
    color: #888888;
  }
  code {
    text-decoration: none;
    font-family: "Open Sans", sans-serif;
    font-weight: bold;
    color: #131315;
    position: relative;
    &:after {
      content: "";
      background: #c7ae86;
      position: absolute;
      bottom: -5px;
      left: 0;
      height: 3px;
      width: 100%;
    }
  }
`;
