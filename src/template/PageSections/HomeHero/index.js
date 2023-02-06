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
  Topo,
  Border
} from "./styles";
import video from "../../../images/car3.mp4";
import Logo from "../../../images/logo-trans.svg";
import Top from "../../../images/top.svg";
import bg from "../../../images/sq-topo-g.svg";
const HomeHero = ({ section: { elements } }) => {
  const videoRef = React.useRef();
  const setPlayBack = () => {
    videoRef.current.playbackRate = 0.8;
  };
  return (
    <Container>
      <Topo src={bg} />
      <video
        ref={videoRef}
        onCanPlay={() => setPlayBack()}
        height="100%"
        controls={false}
        autoPlay={true}
        playsInline={true}
        muted={true}
        loop={true}
      >
        <source src={video} type="video/mp4" autoPlay={true} />
      </video>
      <Left background={Top}>
        <div>
          <img src={Logo} />
        </div>
      </Left>
      <Right >
        <Border>
    
        <Intro>{elements.intro.value}</Intro>
        <SubIntro>{elements.sub_intro.value}</SubIntro>
        <Graphic className="text-focus-in">
          <img src={elements.graphic.value[0].url} />
        </Graphic>
        <Tagline className="text-focus-in">{elements.tagline.value}</Tagline>
        </Border>
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
