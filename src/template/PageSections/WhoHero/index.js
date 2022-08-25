import React from "react";
import { graphql } from "gatsby";
import {
  Container,
  Left,
  Right,
  Hero,
  HeroImage,
  HeroTexture,
  Title,
  Description,
} from "./styles";

const WhoHero = ({ section }) => {
  console.log(section);
  return (
    <Container>
      <Left>
        <Title>{section.elements.title.value}</Title>
        <Description>{section.elements.description.value}</Description>
      </Left>
      <Right>
        <Hero>
          <HeroImage src={section.elements.image.value[0].url} />
          <HeroTexture src={section.elements.texture.value[0].url} />
        </Hero>
      </Right>
    </Container>
  );
};

export default WhoHero;
export const WhoHeroFragment = graphql`
  fragment WhoHeroFragment on kontent_item_section___who_we_are_hero {
    id
    system {
      id
      type
      codename
    }
    elements {
      description {
        value
      }
      image {
        value {
          name
          height
          description
          url
          width
        }
      }
      texture {
        value {
          description
          height
          url
          width
        }
      }
      title {
        value
      }
    }
  }
`;
