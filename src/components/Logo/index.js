import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
const Container = styled.div`
  img {
    width: 265px;
  }
`;

const Logo = ({ background, image, alt }) => {
  const data = useStaticQuery(graphql`
    query LogoQuery {
      kontentItemSiteMetadata {
        elements {
          logo {
            value {
              url
              description
            }
          }
          logo_reverse {
            value {
              url
              description
            }
          }
        }
      }
    }
  `);
  const {
    kontentItemSiteMetadata: { elements },
  } = data;
  return background === "dark" ? (
    <Container>
      <Link to="/">
        <img
          src={elements.logo_reverse.value[0].url || null}
          alt={elements.logo_reverse.value[0].description || alt || "Logo Dark"}
        />
      </Link>
    </Container>
  ) : (
    <Container>
      <Link to="/">
        <img
          src={elements.logo.value[0].url || null}
          alt={elements.logo.value[0].description || alt || "Logo Light"}
        />
      </Link>
    </Container>
  );
};

export default Logo;
