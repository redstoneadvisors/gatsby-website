import styled from "styled-components";
import { Link } from "gatsby";
export const Navbar = styled.nav`
  margin: 0 auto;
  display: block;
  padding: 25px 80px;
  /* padding: ${({background}) => background == 'white'? '20px 80px': '30px 80px'}; */
  @media screen and (max-width: 800px) {
    padding: 20px 30px;
  }
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  background-color: ${(props) => props.background};
  transition: all 0.2s ease;
  ul {
    opacity: 0.8;
    width: 100%;
    display: block;
    max-width: 1920px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media screen and (max-width: 800px) {
      justify-content: flex-start;
    }
    list-style: none;
    padding: 0;
    li {
      width: max-content;
      &:nth-of-type(2) {
        @media screen and (max-width: 800px) {
          margin-left: auto;
        }
      }
      img {
        @media screen and (max-width: 800px) {
          display: block;
          width: 50%;
          margin-left: auto;
        }
      }
    }
  }
`;
export const Contact = styled(Link)`
  /* background-color: #c7ae86; */

  font-family: "Poppins", serif;
  text-transform: uppercase;
  border: ${({ headerColor, location }) => (headerColor == "white"|| location != '/' && location != '/what-we-do' && location != '/why-us'? '3px solid #c7ae86' : '2px solid white')};
  /* border: 2px solid white; */
  color: ${({ headerColor, location }) => (headerColor == "white"|| location != '/' && location != '/what-we-do' && location != '/why-us'? '#c7ae86' : 'white')};
  border-radius: 20px;
  height: 36px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0 1.1rem;
  font-weight: 600;
  text-decoration: none;
  font-size: .8rem;
  &:hover {
    color: white;
    border: 2px solid #c7ae86; 
    background-color: #c7ae86;
    transform: scale(1.05);
    transition: all ease-in-out .2s;
  }
  @media screen and (max-width: 800px) {
    display: none;
  }
`;
export const NavLink = styled(Link)`
  display: block;
  color: rgba(0,0,0,1);
  font-weight: 400;
  font-size: 12px;
  position: relative;
  text-transform: uppercase;
  font-family: "Poppins", serif;
  span{
    color: rgba(0,0,0,1);
  }
  &:hover span{
    color:#c7ae86;
  }
  &:last-of-type{
    grid-column: 1/3;
    width: 100%;
    max-width: none;
   }
`;
export const NavList = styled.ul`
display: block;
width: 100%;
  list-style: none;
margin: 0;
padding:0;
padding-top: 50px;;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: max-content max-content max-content;
  gap: 1rem;
  height: min-content;
img{
  height: 60px;
}
  li {
    position: relative;
    display: flex;
    flex-direction: column;
 justify-content: space-between;
    align-items: center;
    width: 150px;
    height: 150px;
    max-width: 150px;
    max-height: 150px;
    margin: 0 auto;
    margin-bottom: 1rem;
    border-radius: 4px;
    background: #fff;
box-shadow:  20px 20px 60px #bebebe,
             -20px -20px 60px #ffffff;
   padding: 40px 20px 15px 20px;
   &:last-of-type{
    grid-column: 1/3;
    width: 100%;
    max-width: none;
   }

  border: 4px solid;
  border-image: repeating-linear-gradient(135deg,#c7ae86 0 5px,#c7ae86 0 10px,#c7ae86 0 15px) 3;
  -webkit-mask: 
    conic-gradient(from 180deg at top 4px right 4px, #0000 90deg,#000 0)
     var(--_i,200%) 0  /200% var(--_i,4px) border-box no-repeat,
    conic-gradient(at bottom 4px left  4px,  #0000 90deg,#000 0)
     0   var(--_i,200%)/var(--_i,4px) 200% border-box no-repeat,
    linear-gradient(#000 0 0) padding-box no-repeat;
  transition: .3s, -webkit-mask-position .3s .3s;

   &:hover{
    cursor: pointer;
    transform: scale(1.05);
    transition: scale ease-in-out 300ms;
    background: #fff;
    --_i: 100%;
  color: #CC333F;
  transition: .2s, -webkit-mask-size .2s .2s;
   }
   
  }
`;
export const Active = styled.div`
width: 8px;
height: 8px;
border-radius: 100%;
background-color: #c7ae86;
margin: 0 auto;
`
