import styled from "styled-components";
import { Link } from "gatsby";
export const Container = styled.section`
  background-color: #c7ae86;
  display: grid;
  grid-template-columns: max-content 1fr max-content;
  border-bottom: 64px solid #a08c6b;
  padding: 80px 80px 50px 80px;
  align-items: center;
`;
export const Left = styled.div`
  padding-left: 100px;
`;
export const Center = styled.div`
  margin: 0 auto;
  p {
    color: #7c6b50;
    font-size: 28px;
    font-family: "PT Serif", serif;
    line-height: 40px;
    text-shadow: 0px 1px rgba(0, 0, 0, 0.2);
  }
`;
export const Right = styled.div`
  position: relative;
  &:before {
    content: "";
    background: #7c6b50;
    position: absolute;
    top: 0;
    left: -50px;
    height: 100%;
    width: 3px;
  }
`;

export const PageLink = styled(Link)`
  display: block;
  text-align: center;
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  max-width: 90%;
  font-weight: bold;
  text-decoration: underline;
  text-underline-offset: 8px;
  text-decoration-color: #7c6b50;
  cursor: pointer;
  &:hover {
    color: #7c6b50;
    text-decoration-color: #fff;
  }
`;
