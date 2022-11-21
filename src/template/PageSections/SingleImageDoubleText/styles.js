import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 300px;
  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

export const Left = styled.div`
  grid-column: ${({ layout }) => (layout == "left" ? 1 : 2)};
  grid-row: 1;
  @media screen and (max-width: 800px) {
    grid-column: 1;
  }
  img {
    display: block;
    width: 100%;
    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.4) !important;
  }
`;
export const Right = styled.div`
  grid-column: ${({ layout }) => (layout == "left" ? 2 : 1)};
  grid-row: 1;
  @media screen and (max-width: 800px) {
    grid-row: 2;
    grid-column: 1;
  }
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 50px;
`;

export const Title = styled.h2`
  font-size: 50px;
  font-family: "PT Serif", serif;
  color: #c7ae86;
  font-weight: bold;
  font-style: italic;
  width: max-content;
  margin-left: ${(props) =>
    props.layout == "left" && props.order == 1
      ? "auto"
      : props.layout == "right" && props.order == 2
      ? "auto"
      : 0};
`;
export const Description = styled.p`
  font-size: 18px;
  color: #888888;
  font-weight: 300;
  line-height: 2.5rem;
`;
