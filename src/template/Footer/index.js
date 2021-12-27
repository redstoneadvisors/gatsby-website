import * as React from "react";
import { Links, Legal, Copyright } from "./styles";
import Logo from "../../components/Logo";

const Footer = ({ data }) => {
  const date = new Date();
  const copyrightYear = date.getFullYear();
  const copyright = "Redstone Advisors, Inc.  All rights reserved";

  return (
    <footer>
      <Links>
        <Logo background="dark" />
      </Links>
      <Legal>
        <Copyright>
          <p>{`© ${copyrightYear} ${copyright}`}</p>
        </Copyright>
      </Legal>
    </footer>
  );
};

export default Footer;
