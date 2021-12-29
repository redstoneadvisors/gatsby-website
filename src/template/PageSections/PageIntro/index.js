import { graphql, Link } from "gatsby";
import * as React from "react";
import { RichTextElement } from "@kentico/gatsby-kontent-components";
import { Container, Col } from "./styles";
const PageIntro = ({ section }) => {
  console.log(section);
  return (
    <Container>
      {section.elements.columns.value.map((col) => {
        return <Col>{col.elements.title.value}</Col>;
      })}
    </Container>
  );
};

export default PageIntro;

export const PageIntroFragment = graphql`
  fragment PageIntroFragment on kontent_item_page_intro {
    id
    system {
      id
      type
      codename
    }
    elements {
      columns {
        value {
          ... on kontent_item_column_content {
            elements {
              title {
                value
              }
              description {
                value
              }
              link {
                value
              }
            }
          }
        }
      }
    }
  }
`;
