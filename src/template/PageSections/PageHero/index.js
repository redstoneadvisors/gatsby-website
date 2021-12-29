import { graphql, Link } from "gatsby";
import * as React from "react";
import { RichTextElement } from "@kentico/gatsby-kontent-components";
import { Container, Content, HeroSection } from "./styles";
import bg from "../../../images/red-topo.svg";
const PageHero = ({ section }) => {
  return (
    <HeroSection
      data-kontent-element-codename={section.system.codename}
      data-kontent-item-id={section.system.id}
    >
      <img
        src={bg}
        style={{
          zIndex: 999999999,
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: "block",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: 0.33,
        }}
      />
      <Container backgroundImg={section.elements.background.value[0].url}>
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
      background {
        value {
          url
        }
      }
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
