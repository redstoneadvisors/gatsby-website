import * as React from "react";
import { Link } from "gatsby";
import { Breadcrumbs, Links, Legal, LegalLinks, Copyright } from "./styles";

const Footer = ({ data }) => {
  const date = new Date();
  const copyrightYear = date.getFullYear();
  const copyright = "Redstone Advisors, Inc.  All rights reserved";

  return (
    <footer>
      <Breadcrumbs>
        <Link to="/">Home</Link>
      </Breadcrumbs>
      <Legal>
        <Copyright>
          <p>{`© ${copyrightYear} ${copyright}`}</p>
        </Copyright>
      </Legal>
    </footer>
  );
};

export default Footer;
