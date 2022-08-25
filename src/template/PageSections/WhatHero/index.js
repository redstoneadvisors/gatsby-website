import React from "react";
import { graphql } from "gatsby";
import {
  Container,
  Left,
  Right,
  Accent,
  Title,
  Description,
  Quote,
} from "./styles";

const WhatHero = ({ section }) => {
  return (
    <Container>
      <Title>{section.elements.title.value}</Title>
      <Quote>{section.elements.quote.value}</Quote>
      <Description>{section.elements.author.value}</Description>
      <img src={section.elements.multimedia.value[0].url} />
    </Container>
  );
};

export default WhatHero;
export const WhatHeroFragment = graphql`
  fragment WhatHeroFragment on kontent_item_what_we_do_hero {
    id
    system {
      id
      type
      codename
    }
    elements {
      author {
        value
      }
      multimedia {
        value {
          description
          height
          url
          width
        }
      }
      quote {
        value
      }
      title {
        value
      }
    }
  }
`;
