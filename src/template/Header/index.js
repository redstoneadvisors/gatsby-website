import * as React from "react";
import { Container } from "./styles";
import Logo from "../../components/Logo";

const Header = ({ data }) => {
  return (
    <Container>
      <Logo />
    </Container>
  );
};

export default Header;
