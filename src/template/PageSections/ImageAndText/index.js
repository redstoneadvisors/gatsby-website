import React from "react";
import { graphql } from "gatsby";
import { RichTextElement } from "@kentico/gatsby-kontent-components";
import {
  Container,
  Left,
  Right,
  Title,
  Description,
  Cta,
  Tagline,
} from "./styles";
const ImageAndText = ({ section: { elements } }) => {
  console.log(elements);
  return (
    <Container>
      <Left layout={elements.layout.value[0].codename}>
        {
          (elements.image.value[0].type = "video/mp4" ? (
            <video muted={true} autoPlay={true}>
              <source src={elements.image.value[0].url} type="video/mp4" />
            </video>
          ) : (
            <img src={elements.image.value[0].url} />
          ))
        }
      </Left>
      <Right layout={elements.layout.value[0].codename}>
        <Title>{elements.title.value}</Title>
        <Description>
          <RichTextElement value={elements.description.value}></RichTextElement>
        </Description>
        <Tagline>{elements.tagline.value}</Tagline>
        {elements.cta.value[0] && (
          <Cta
            to={
              "/" +
              elements.cta.value[0].elements.page_link.value[0].elements.slug
                .value
            }
          >
            {elements.cta.value[0].elements.button_text.value}
          </Cta>
        )}
      </Right>
    </Container>
  );
};

export default ImageAndText;

export const ImageAndTextFragment = graphql`
  fragment ImageAndTextFragment on kontent_item_section___image_and_text {
    id
    system {
      id
      type
      codename
    }
    elements {
      title {
        value
      }
      layout {
        value {
          codename
        }
      }
      image {
        value {
          width
          url
          height
          description
          type
        }
      }
      description {
        value
      }
      tagline {
        value
      }
      cta {
        value {
          ... on kontent_item_call_to_action_item {
            id
            elements {
              button_text {
                value
              }
              external_link {
                value
              }
              page_link {
                value {
                  ... on kontent_item_page {
                    id
                    elements {
                      slug {
                        value
                      }
                    }
                  }
                  ... on kontent_item_homepage {
                    id
                    elements {
                      slug {
                        value
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
