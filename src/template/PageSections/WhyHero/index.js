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

const WhyHero = ({ section }) => {
  return (
    <Container>
      <Left>
        <Quote>{section.elements.quote.value}</Quote>
        <Title>{section.elements.title.value}</Title>
        <Description>{section.elements.description.value}</Description>
      </Left>
      <Right>
        <Accent />
        <img src={section.elements.hero.value[0].url} />
      </Right>
    </Container>
  );
};

export default WhyHero;
export const WhyHeroFragment = graphql`
  fragment WhyHeroFragment on kontent_item_why_us_hero {
    id
    system {
      id
      type
      codename
    }
    elements {
      accent_color {
        value
      }
      description {
        value
      }
      hero {
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
