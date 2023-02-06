import React, { useRef, useCallback, useEffect } from "react";
import { graphql } from "gatsby";
import { RichTextElement } from "@kentico/gatsby-kontent-components";
import "../../../styles/global.css";
import {
  Container,
  Left,
  Right,
  Title,
  Description,
  Cta,
  Tagline,
  StaticImage,
} from "./styles";
import { useLocation } from "@reach/router";
import { useInView } from "react-intersection-observer";
const ImageAndText = ({ section: { elements }, orientation, index }) => {
  const leftRef = useRef();
  const rightRef = useRef();

  const [inViewRef, inView] = useInView({ rootMargin: "100px", threshold: 0 });
  const location = useLocation();

  const setRefs = useCallback(
    (node) => {
      rightRef.current = node;
      inViewRef(node);
    },
    [inViewRef]
  );
  useEffect(() => {
    if (inView) {
      if (elements.layout.value[0].codename == "left") {
        leftRef.current.style.opacity = "1";
        leftRef.current.classList.add("slide-in-left");
        rightRef.current.style.opacity = "1";
        rightRef.current.classList.add("slide-in-right");
      } else if (elements.layout.value[0].codename == "right") {
        leftRef.current.style.opacity = "1";
        leftRef.current.classList.add("slide-in-right");
        rightRef.current.style.opacity = "1";
        rightRef.current.classList.add("slide-in-left");
      } else if (elements.layout.value[0].codename == "stacked")
        if (index == 0) {
          leftRef.current.style.opacity = "1";
          leftRef.current.classList.add("slide-in-left");
          rightRef.current.style.opacity = "1";
          rightRef.current.classList.add("slide-in-left");
        } else if (index == 1) {
          leftRef.current.style.opacity = "1";
          leftRef.current.classList.add("slide-in-right");
          rightRef.current.style.opacity = "1";
          rightRef.current.classList.add("slide-in-right");
        } else {
          leftRef.current.style.opacity = "1";
          leftRef.current.classList.add("slide-in-right");
          rightRef.current.style.opacity = "1";
          rightRef.current.classList.add("slide-in-left");
        }
    }
  }, [inView]);

  return (
    <Container location={location.pathname}>
      <Left layout={elements.layout.value[0].codename} ref={leftRef}>
        {orientation == "two-column" ||
        elements.image_dimensions?.value[0]?.codename == "normal" ||
        elements.layout.value[0].codename == "stacked" ? (
          <Title orientation={orientation}>{elements.title.value}</Title>
        ) : null}
        {elements.image.value[0]?.type == "video/mp4" ? (
          <video
            muted={false}
            autoPlay={false}
            controls
            poster={elements.poster_image.value[0]?.url}
          >
            <source src={elements.image.value[0]?.url} type="video/mp4" />
          </video>
        ) : (
          <StaticImage
            src={elements.image.value[0]?.url}
            dimensions={elements.image_dimensions?.value[0]?.codename}
            location={location.pathname}
          />
        )}
      </Left>
      <Right
        ref={setRefs}
        layout={elements.layout.value[0].codename}
        location={location.pathname}
      >
        {(orientation == "two-column" &&
          elements.image_dimensions?.value[0]?.codename == "normal") ||
        location.pathname == "/" ? (
          <Title orientation={orientation} location={location.pathname}>
            {elements.title.value}
          </Title>
        ) : null}
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
