import styled from "styled-components";
import { Link } from "gatsby";
export const Container = styled.section`
  padding: 50px 80px;
  padding: ${({ location }) => (location == "/" ? '150px 80px' : '50px 80px')};
  max-width: 1525px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 50% 50%;
  gap: ${({ location }) => (location == "/" ? '8rem' : '2rem')};
  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    padding: 50px 0;
    gap: 0;
  }
`;
export const Left = styled.div`

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
    padding: 20px;
  }
`;
export const StaticImage = styled.img`
    max-width: ${({ dimensions }) => (dimensions == "normal" ? 'none': '690px')};
    margin: 0 auto;
    width: 100%;
    /* max-width: 690px; */
    /* border-radius: 0 100px 0 100px; */
    border-radius: 4px;
    box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
    @media screen and (max-width: 800px) {
      border-radius: 0;
    }

`
export const Right = styled.div`
 grid-column: ${({ layout }) => (layout == "left" ? 2 : layout == 'stacked' ? '1 / 3' : 1)};
 grid-row: ${({ layout }) => (layout == "left" ? 1 : layout == 'stacked' ? 2 : 1)};
 padding: ${({ location }) => (location == '/' ? '0 80px 0 0': 'none')};

  @media screen and (max-width: 800px) {
    grid-row: 2;
    grid-column: 1;
    padding: 20px;
  }
  strong {
    color: #4c4e56;
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
  font-size: ${({ orientation }) => (orientation == "two-column" ? '24px' : '32px')};
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
  padding: ${({ orientation, location }) => (orientation == "two-column" ? '2rem 4rem' : location=='/' ?  '0rem'    :'0 4rem')};
  p {
    letter-spacing: 0.02rem;

    font-size: 1rem;
    margin: 0;
    padding: 0;
  }
  @media screen and (max-width: 800px) {
    padding: 20px;
  }
`;
export const Cta = styled(Link)`
  font-family: "PT Serif", serif;
  color: white;
  background-color: #c7ae86;
  text-decoration: none;
  height: 50px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  border-radius: 50px;
  font-weight: 600;
  letter-spacing: 0.02rem;
  text-transform: uppercase;
  &:hover {
    color: white;
    background-color: #b29058;
    transition: all 0.2s ease;
  }
`;
export const Tagline = styled.h4`
  width: 100%;
  max-width: max-content;
  color: #c7ae86;
  font-family: "Cinzel",serif;

  line-height: 50px;
  font-weight: 600;
  font-size: 30px;
  margin: 35px 0 35px 0;
`;
