import React from "react";
import { graphql } from "gatsby";
import {
  Container,
  Overlay,
  Right,
  Intro,
  SubIntro,
  Tagline,
  Topo,
LogoOverlay,
  CTA
} from "./styles";
import video from "../../../images/car3.mp4";
import Logo from "../../../images/logo-w.svg";
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
      <Overlay background={Top}>
        <div>
         
        </div>
      </Overlay>
      <Right>
      <LogoOverlay className="slide-in-left">
        <img src={Logo}/>
      </LogoOverlay>
        <div style={{alignSelf:'center', justifySelf:'center', gridColumn:2, padding:'0 60px'}}>
          <Intro className="text-focus-in">{elements.intro.value}</Intro>
          <SubIntro className="text-focus-in-1">{elements.sub_intro.value}</SubIntro>
          <Tagline className="text-focus-in-2" >{elements.tagline.value}</Tagline>
          <CTA href="#see-more" className="text-focus-in">SEE MORE</CTA>
        </div>
       
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
