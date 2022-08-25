import React from "react";
import { graphql } from "gatsby";
import { Container, Inner, Quote, Author, Ellipsis } from "./styles";
import ellipsis from "../../../images/Ellipsis-blue.svg";
const BlueBanner = ({ section: { elements } }) => {
  return (
    <Container>
      <Inner>
        <Ellipsis position="top">
          <img src={ellipsis} />
        </Ellipsis>
        <Quote>{elements.quote.value}</Quote>
        <Author>{elements.attribution.value}</Author>
        <Ellipsis position="bottom">
          <img src={ellipsis} />
        </Ellipsis>
      </Inner>
    </Container>
  );
};

export default BlueBanner;

export const BlueBannerFragment = graphql`
  fragment BlueBannerFragment on kontent_item_blue_banner {
    id
    system {
      id
      type
      codename
    }
    elements {
      attribution {
        value
      }
      quote {
        value
      }
    }
  }
`;
