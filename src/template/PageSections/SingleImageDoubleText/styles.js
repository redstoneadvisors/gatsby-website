import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 300px;
`;

export const Left = styled.div`
  grid-column: ${({ layout }) => (layout == "left" ? 1 : 2)};
  grid-row: 1;
  img {
    width: 100%;
  }
`;
export const Right = styled.div`
  grid-column: ${({ layout }) => (layout == "left" ? 2 : 1)};
  grid-row: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 50px;
`;

export const Title = styled.h2`
  font-size: 50px;
  font-family: "PT Serif", serif;
  color: #4c4e56;
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
  font-size: 21px;
  color: #888888;
  font-weight: 300;
  line-height: 3rem;
`;
