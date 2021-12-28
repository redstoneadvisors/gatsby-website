import styled from "styled-components";
import { Link } from "gatsby";
export const Container = styled.div`
  ${(props) => props.theme.container};
  background: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Navigation = styled.div``;
export const NavLink = styled(Link)`
  margin-left: 1rem;
  text-decoration: none;
  color: #4c4e56;
`;
