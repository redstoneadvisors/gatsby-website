import React from "react";
import { graphql } from "gatsby";
import {
  Container,
  Left,
  Right,
  Intro,
  SubIntro,
  Tagline,
  Graphic,
} from "./styles";
import video from "../../../images/car.mp4";
import Logo from "../../../images/homepage-redstone-logo.svg";
import Top from "../../../images/top.svg";
import Watermark from "../../../images/home-red-repeat-bg.svg";
const HomeHero = ({ section: { elements } }) => {
  console.log(elements);
  return (
    <Container>
      <Left background={Top}>
        <img src={Logo} />
      </Left>
      <Right background={Watermark}>
        <Intro>{elements.intro.value}</Intro>
        <SubIntro>{elements.sub_intro.value}</SubIntro>
        <Graphic>
          <img src={elements.graphic.value[0].url} />
          {/* <video width="100%" height="100%" controls={false} autoPlay={true}>
            <source src={video} type="video/mp4" autoPlay={true} />
          </video> */}
        </Graphic>
        <Tagline>{elements.tagline.value}</Tagline>
      </Right>
    </Container>
  );
};

export default HomeHero;

export const HomeHeroFragment = graphql`
  fragment HomeHeroFragment on kontent_item_section___home_hero {
    id
    system {
      id
      type
      codename
    }
    elements {
      intro {
        value
      }
      sub_intro {
        value
      }
      tagline {
        value
      }
      graphic {
        value {
          height
          description
          width
          url
        }
      }
    }
  }
`;
