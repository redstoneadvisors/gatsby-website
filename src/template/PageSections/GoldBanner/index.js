import React from "react";
import { graphql } from "gatsby";
import { Container, Left, Center, Right, PageLink } from "./styles";
const GoldBanner = ({ section: { elements } }) => {
  return (
    <Container>
      <Left>
        <img src={elements.logo.value[0].url} />
      </Left>
      <Center>
        <p>{elements.description.value}</p>
        <p>{elements.description_2.value}</p>
      </Center>
      <Right>
        <PageLink to="/contact-us">{elements.cta_text.value}</PageLink>
      </Right>
    </Container>
  );
};

export default GoldBanner;

export const GoldBannerFragment = graphql`
  fragment GoldBannerFragment on kontent_item_gold_banner {
    id
    system {
      id
      type
      codename
    }
    elements {
      cta_text {
        value
      }
      logo {
        value {
          width
          url
          height
          description
        }
      }
      description {
        value
      }
      description_2 {
        value
      }
    }
  }
`;
