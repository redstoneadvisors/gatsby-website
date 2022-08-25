import React from "react";
import { graphql } from "gatsby";
import { Container } from "./styles";
const SingleColumnBanner = ({ section }) => {
  return <Container>{section.elements.body.value}</Container>;
};

export default SingleColumnBanner;
export const SingleColumnBannerFragment = graphql`
  fragment SingleColumnBannerFragment on kontent_item_single_column_banner {
    id
    system {
      id
      type
      codename
    }
    elements {
      body {
        value
      }
    }
  }
`;
