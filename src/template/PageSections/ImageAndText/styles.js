import styled from "styled-components";
import { Link } from "gatsby";
export const Container = styled.section`
  padding: 50px 80px;
  padding: ${({ location }) => (location == "/" ? '150px 80px' : '50px 80px')};
  max-width: 1525px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 50% 50%;
  gap: ${({ location }) => (location == "/" ? '5vw' : '2rem')};
  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    padding: 2rem 0;
    gap: 0;
  }
`;
export const Left = styled.div`
opacity: 0;
  grid-column: ${({ layout }) => (layout == "left" ? 1 : layout == 'stacked' ? '1 / 3' : 2)};
  grid-row: ${({ layout }) => (layout == "left" ? 1 : layout == 'stacked' ? 1 : 1)};

  video {
    display: block;
    border-radius: 3px;
    width: 100%;
    box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
  }
  @media screen and (max-width: 800px) {
    grid-column: 1;
    grid-row: 1;
    padding: 20px 40px;
  }
`;
export const StaticImage = styled.img`
    max-width: ${({ dimensions }) => (dimensions == "normal" ? 'none': '690px')};
    margin: 0 auto;
    width: 100%;
    /* max-width: 690px; */
    /* border-radius: 0 100px 0 100px; */
    height: 100%;
    height: ${({location}) => location=='/who-we-are' || location == '/what-we-do'? 'auto' : '100%'};
    min-height: 300px;
    object-fit: cover;
    object-position: left;
    border-radius: 4px;
    box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
    @media screen and (max-width: 800px) {
      object-position: center;
    }

`
export const Right = styled.div`
opacity: 0;
 grid-column: ${({ layout }) => (layout == "left" ? 2 : layout == 'stacked' ? '1 / 3' : 1)};
 grid-row: ${({ layout }) => (layout == "left" ? 1 : layout == 'stacked' ? 2 : 1)};
 padding: ${({ location }) => (location == '/' ? '0 80px 0 0': 'none')};

  @media screen and (max-width: 800px) {
    grid-row: 2;
    grid-column: 1;
    padding: 20px 40px;
  }
  strong {
    color: #4c4e56;
  }
  p{

    &:first-of-type{
      initial-letter: 3; 
      &::first-letter{
        /* color:#c7ae86; */
        /* font-weight: 900;
        font-size: 20px; */
        /* text-shadow: 0px 2px 5px rgba(0,0,0,0.3); */
      }

    }
  }
`;

export const Title = styled.h2`
  font-family: "Cinzel", serif;
  text-transform: uppercase;
  font-size: 48px;
margin: 0;
padding: 0;
font-size: ${({ orientation }) => (orientation == "two-column" ? '32px' : '48px')};
@media screen and (max-width: 1080px) {
  font-size: ${({ orientation }) => (orientation == "two-column" ? '32px' : '32px')};
  margin: ${({ location }) => (location == "/" ? '0 0 2rem 0' : ' 0 auto 3rem auto;')};
  }
  font-weight: bold;
  position: relative;
width: ${({ orientation }) => (orientation == "two-column" ? 'max-content' : 'max-content')};
  margin: ${({ location }) => (location == "/" ? '0 0 2rem 0' : ' 0 auto 5rem auto;')};
  &:after {
    content: "";
    background: #c7ae86;
    position: absolute;
    bottom: -10px;
    left: 0;
    height: 5px;
    width: 100%;
    border-radius: 1px;
  }
`;
export const Description = styled.div`
  color: #989898;
  font-family: "PT Serif", serif;
  line-height: 35px;
  padding: ${({ orientation, location }) => (orientation == "two-column" ? '2rem 2rem' : location=='/' ?  '0rem'    :'0 4rem')};
  @media screen and (max-width: 800px) {
    padding: ${({ orientation, location }) => (orientation == "two-column" ? '0' : location=='/' ?  '0rem'    :'0rem')};
}
  p {
    letter-spacing: 0.02rem;
 
    font-size: 1rem;
    line-height: 1.8rem;
    margin: 0;
    margin-bottom: 1.2rem;
    padding: 0;
  }
  em{
   
  }
  @media screen and (max-width: 800px) {
  
  }
`;
export const Cta = styled(Link)`
 font-family: "Cinzel", serif;
  color: #c7ae86;
  background-color: #fff;
  text-decoration: none;
  height: 50px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  border: 2px solid  #c7ae86;
  border-radius: 50px;
  font-weight: 700;
  letter-spacing: 0.02rem;
  text-transform: uppercase;
  &:hover {
    color: white;
    background-color:  #c7ae86;
    transition: all 0.2s ease;
  }
`;
export const Tagline = styled.h4`
white-space: pre-wrap;
  width: 100%;
  max-width: max-content;
  color: #c7ae86;
  font-family: "Cinzel",serif;

  line-height: 50px;
  font-weight: 600;
  font-size: 30px;
  margin: 35px 0 35px 0;
`;
