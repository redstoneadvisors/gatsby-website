import styled from "styled-components";
import { Link } from "gatsby";
export const Container = styled.section`
  padding: 200px 80px;
  max-width: 1525px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8rem;
`;
export const Left = styled.div`
  grid-column: ${({ layout }) => (layout == "left" ? 1 : 2)};
  grid-row: 1;
  img {
    margin: 0 auto;
    width: 100%;
    max-width: 690px;
    border-radius: 0 100px 0 100px;
  }
`;
export const Right = styled.div`
  grid-column: ${({ layout }) => (layout == "left" ? 2 : 1)};
  grid-row: 1;
  margin-top: 170px;
  strong {
    color: #4c4e56;
  }
`;

export const Title = styled.h2`
  font-family: "PT Serif", serif;
  font-size: 36px;
  font-weight: bold;
  position: relative;
  width: max-content;
  &:after {
    content: "";
    background: #c7ae86;
    position: absolute;
    bottom: -10px;
    left: 0;
    height: 3px;
    width: 100%;
  }
`;
export const Description = styled.div`
  color: #989898;
  font-family: "PT Serif", serif;
  line-height: 35px;
  padding-top: 50px;
  p {
    letter-spacing: 0.02rem;
    position: relative;
    font-size: 1rem;
    &:before {
      content: "";
      background: #c7ae86;
      position: absolute;
      top: 10px;
      transform: translateY(100%);
      left: -20px;
      height: 5px;
      width: 5px;
    }
  }
`;
export const Cta = styled(Link)`
  font-family: "PT Serif", serif;
  color: white;
  background-color: #c7ae86;
  text-decoration: none;
  height: 50px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  border-radius: 50px;
  font-weight: 600;
  letter-spacing: 0.02rem;
  &:hover {
    color: white;
    background-color: #b29058;
    transition: all 0.2s ease;
  }
`;
export const Tagline = styled.h4`
  color: #000;
  font-family: "PT Serif", serif;
  line-height: 35px;
  font-weight: 600;
  font-size: 16px;
  margin: 55px 0;
  letter-spacing: 1px;
`;
