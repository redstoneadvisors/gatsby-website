import styled from "styled-components";
import { Link } from "gatsby";
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
`;
export const Navigation = styled.div``;
export const NavLink = styled(Link)`
  margin-left: 1rem;
  text-decoration: none;
  color: #fff;
  &:last-child {
    margin-right: 2rem;
  }
`;
