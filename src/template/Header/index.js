import * as React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { Container, Navigation } from "./styles";
import Logo from "../../components/Logo";

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      allKontentItemNavigationItem(sort: { fields: elements___order___value }) {
        nodes {
          elements {
            label {
              value
            }
            order {
              value
            }
            page {
              value {
                ... on kontent_item_page {
                  elements {
                    slug {
                      value
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `);
  const navLinks = data.allKontentItemNavigationItem.nodes;
  console.log(navLinks);
  return (
    <Container>
      <Logo />
      <Navigation>
        {navLinks.map((item) => {
          return (
            <Link to={"/" + item.elements.page.value[0].elements.slug.value}>
              {item.elements.label.value}
            </Link>
          );
        })}
      </Navigation>
    </Container>
  );
};

export default Header;
