import styled from "styled-components";
import { Link } from "gatsby";
export const Container = styled.section`
  padding: 200px 80px;
  max-width: 1525px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8rem;
  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    padding: 50px 0;
    gap: 0;
  }
`;
export const Left = styled.div`
  grid-column: ${({ layout }) => (layout == "left" ? 1 : 2)};
  grid-row: 1;
  img {
    margin: 0 auto;
    width: 100%;
    max-width: 690px;
    border-radius: 0 100px 0 100px;
    @media screen and (max-width: 800px) {
      border-radius: 0;
    }
  }
  @media screen and (max-width: 800px) {
    grid-column: 1;
    grid-row: 1;
    padding: 20px;
  }
`;
export const Right = styled.div`
  grid-column: ${({ layout }) => (layout == "left" ? 2 : 1)};
  grid-row: 1;
  @media screen and (max-width: 800px) {
    grid-row: 2;
    grid-column: 1;
    padding: 20px;
  }
  strong {
    color: #4c4e56;
  }
`;

export const Title = styled.h2`
  font-family: "Cinzel", serif;
  text-transform: uppercase;
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
    height: 5px;
    width: 100%;
    border-radius: 1px;
  }
`;
export const Description = styled.div`
  color: #989898;
  font-family: "PT Serif", serif;
  line-height: 35px;
  padding-top: 20px;
  p {
    letter-spacing: 0.02rem;
    position: relative;
    font-size: 1rem;
    margin: 0;
    margin-bottom: 1rem;
    /* &:before {
      content: "";
      background: #c7ae86;
      position: absolute;
      top: 8px;
      transform: translateY(100%);
      left: -20px;
      height: 7px;
      width: 7px;
      border-radius: 100px;
    } */
  }
  @media screen and (max-width: 800px) {
    padding: 20px;
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
  text-transform: uppercase;
  &:hover {
    color: white;
    background-color: #b29058;
    transition: all 0.2s ease;
  }
`;
export const Tagline = styled.h4`
  width: 100%;
  max-width: max-content;
  color: #c7ae86;
  font-family: "Italiana", serif;

  line-height: 50px;
  font-weight: 600;
  font-size: 29px;
  margin: 35px 0 55px 0;
`;
