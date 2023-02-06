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
  StaticImage
} from "./styles";
import { useLocation } from '@reach/router';
const ImageAndText = ({ section: { elements }, orientation }) => {
  const location = useLocation()
  return (
    <Container  location={location.pathname}>
      <Left layout={elements.layout.value[0].codename}>
      {orientation=='two-column' || elements.image_dimensions?.value[0]?.codename == "normal" || elements.layout.value[0].codename == 'stacked' ?  <Title orientation={orientation}>{elements.title.value}</Title> : null}
        {elements.image.value[0]?.type == "video/mp4" ? (
          <video muted={false} autoPlay={false} controls poster={elements.poster_image.value[0]?.url}>
            <source src={elements.image.value[0]?.url} type="video/mp4" />
          </video>
        ) : (
          <StaticImage src={elements.image.value[0]?.url} dimensions={elements.image_dimensions?.value[0]?.codename} location={location.pathname}/>
        )}
      </Left>
      <Right layout={elements.layout.value[0].codename} location={location.pathname}>
      {orientation=='two-column' && elements.image_dimensions?.value[0]?.codename  == "normal" || location.pathname == '/' ? <Title orientation={orientation} location={location.pathname}>{elements.title.value}</Title> :null  }
        <Description orientation={orientation} location={location.pathname}>
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
      poster_image {
        value {
          description
          height
          url
          width
        }
      }
      image_dimensions {
        value {
          codename
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
