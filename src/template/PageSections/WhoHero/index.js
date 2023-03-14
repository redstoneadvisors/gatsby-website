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
  Quote,
} from "./styles";
import { RichTextElement } from "@kentico/gatsby-kontent-components";

const WhoHero = ({ section }) => {
  console.log(section);
  return (
    <Container>
      <Left>
     
        <Title>{section.elements.title.value}</Title>
        <Description>
        <RichTextElement value={section.elements.description_rt.value} />
        </Description>
        <Description>
          <span>{section.elements.description_3.value}</span>
        </Description>
      </Left>
      <Right>
        <Hero>
          <HeroImage src={section.elements.image.value[0].url} />
          <HeroTexture src={section.elements.texture.value[0].url} />
        </Hero>
        <Quote>
          <RichTextElement value={section.elements.quote.value} />
        </Quote>
      </Right>
    </Container>
  );
};

export default WhoHero;
export const WhoHeroFragment = graphql`
  fragment WhoHeroFragment on kontent_item_section___who_we_are_hero {
    system {
      id
      type
      codename
    }
    elements {
      quote{
        value
      }
      description_rt {
        value
      }
      description_2 {
        value
      }
      description_3 {
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
