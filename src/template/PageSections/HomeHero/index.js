import React from "react";
import { graphql } from "gatsby";
import {
  Container,
  Overlay,
  Right,
  Intro,
  SubIntro,
  Tagline,
Border,
  Topo,
  LogoH,
  Line,
  CTA
} from "./styles";
import video from "../../../images/car3.mp4";
import Logo from "../../../images/Subtraction 3.svg";
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
      <Right >
        {/* <Border> */}
     
  
   <div style={{alignSelf:'center', justifySelf:'center', gridColumn:2}}>
   {/* <Border img={Logo}>
   <LogoH src={Logo} />
   </Border> */}
   <Intro className="text-focus-in">{elements.intro.value}</Intro>
        <SubIntro className="text-focus-in-1">{elements.sub_intro.value}</SubIntro>
        {/* <Graphic className="text-focus-in">
          <img src={elements.graphic.value[0].url} />
        </Graphic> */}
        <Tagline className="text-focus-in-2" >{elements.tagline.value}</Tagline>
        </div>
{/* <Line/> */}
      </Right>
      <CTA href="#see-more" className="text-focus-in">SEE MORE</CTA>
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
