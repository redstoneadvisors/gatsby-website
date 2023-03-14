import styled from "styled-components";
import { Link } from "gatsby";
export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  /* @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
  } */
  border-bottom: 10px solid  #c7ae86;;
  height: 100vh;
  max-height: 1080px;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0));
  background-color: rgba(0, 0, 0, 0.3);
  position: relative;
  overflow: hidden;
  video {
    position: absolute;
    z-index: -1;
    width: 100%;
    object-fit: cover;
  }
`;
export const Topo = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.15;
  z-index: 0;

  object-fit: cover;
`;

export const Overlay = styled.div`
  /* background-image: url(${(props) => props.background}); */
  /* box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.7); */
  /* @media screen and (max-width: 1000px) {
    display: none;
  } */
  /* margin-right: 3px;
  border-right: 3px solid rgba(199, 174, 134, 0.3); */
  display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    border: 0;
    right: 0;
    z-index: -1;
    height: 100%;
    width: 100%;
    background:rgba(0,0,0,0.15);
    /* background:linear-gradient(180deg, rgba(0,0,0,.5) 20%, rgba(0,0,0,0) 80%); */
  /* img {
    opacity: 0.8;
  }
  div {

  } */
`;

export const Right = styled.div`
  background-image: url(${(props) => props.background});
  display: grid;
grid-template-columns: minmax(0, 437px) 1fr;
@media screen and (max-width: 1350px) {
  grid-template-columns: 1fr;
  }
 text-align: center;
  padding: 0 20px 0 0;
  position: relative;


`;
export const Intro = styled.h2`
font-family: 'Lora', serif;
text-transform: uppercase;
margin: 0;
margin-top: -4rem;
/* opacity: .7 !important; */
  font-size: 40px;
  color:  rgba(255, 255, 255, .9);
  font-weight: 500;
margin-bottom: .7rem;
  line-height: 1.1;
  white-space: nowrap;
  @media screen and (max-width: 700px) {
font-size: 25px;
}
`;
export const SubIntro = styled.h3`
 white-space: nowrap;

margin: 0;
font-family: 'Lora', serif;
text-transform: uppercase;
/* opacity: .7 !important; */
  font-size: 35.5px;
  color: rgba(255, 255, 255, .9);
  font-weight: 500;
  @media screen and (max-width: 700px) {
font-size: 20px;
}

`;
export const Tagline = styled.h3`
font-family: 'Lora', serif;
white-space: nowrap;
color: rgba(255, 255, 255, 1);
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 500;

  @media screen and (max-width: 1000px) {
    padding-left: 2rem;
    padding-right: 2rem;
    font-size: 20px;
  }
  @media screen and (max-width: 700px) {
font-size: .8rem;
}
  border-bottom: 2px solid  #c7ae86;
  border-top: 2px solid  #c7ae86;
  padding: 3px 0px;
  width: max-content;
  margin:0 auto;
  margin-top: 5rem;
  position: relative;
  &:after {
      content: "";
      background: #fff;
      position: absolute;
      top:10vh;
      left: 50%;
      transform: translateX(-50%);
      height: 100%;
      animation: grow 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
      animation-delay: 6.5s;
      width: 3px
    }
`;
export const LogoH = styled.img`
`;

export const Border = styled.div`
min-height: 300px;
box-sizing: border-box;
/* border-radius:100%; */
/* background-color: white; */
width: 100%;
/* mask-image: url(${({img}) => img});
mask-repeat: no-repeat;
mask-position: center;
mask-composite: add; */
margin-bottom: 4rem;
outline: #c7ae86 solid 4px;
outline-offset: 15px;
opacity: .9;


`
// export const Line = styled.div`
// grid-row: 2;
// grid-column: 2;
// width: 3px;
// height: 100%;
// min-height: 50px;
// background-color: #c7ae86 ;
// place-self: center;
// align-items: center;
// `

export const CTA =styled(Link)`
border: 2px solid white;
/* width: max-content;
height: max-content;
margin: 0 auto;
position: absolute;
bottom: 13vh;
left: 50%;
transform: translate(-50%, -50%); */
position: relative;
top: 22vh;
color: white;
border-radius: 100px;
padding: 0 1.1rem;
height: 36px;
display: inline-flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    font-weight: 600;
    &:hover{
      color: #000;
      background-color: white;

    }
animation-delay:6.5s;

`

export const LogoOverlay = styled.div`
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    position: relative;
    z-index: 0;
    height: 100%;
    width: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0.9) 10%, rgba(0, 0, 0, 0) 90%);
opacity: .6;
@media screen and (max-width: 1350px) {
   display: none;
  }

`
export const Content = styled.div`
align-self: center;
justify-self: center;
grid-column: 2;
padding: 0 60px;
@media screen and (max-width: 1350px) {
  grid-column: 1;
  }
`

