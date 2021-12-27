import { graphql, Link } from "gatsby";
import * as React from "react";
import { RichTextElement } from "@kentico/gatsby-kontent-components";
import { Container, Content, HeroSection } from "./styles";

const PageHero = ({ section }) => {
  return (
    <HeroSection
      data-kontent-element-codename={section.system.codename}
      data-kontent-item-id={section.system.id}
    >
      <Container>
        <Content>
          <h1>{section.elements.heading.value}</h1>
          <RichTextElement
            value={section.elements.body.value}
            links={section.elements.body.links}
            resolveLink={(link, domNode) => {
              return <Link to={link.url_Slug}>{domNode.children[0].data}</Link>;
            }}
          />
        </Content>
      </Container>
    </HeroSection>
  );
};

export default PageHero;

export const PageHeroFragment = graphql`
  fragment PageHeroFragment on kontent_item_page_hero {
    id
    system {
      id
      type
      codename
    }
    elements {
      heading {
        value
      }
      body {
        value
        links {
          url_slug
          link_id
          codename
          type
        }
      }
    }
  }
`;
