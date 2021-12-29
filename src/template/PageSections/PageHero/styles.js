import styled from "styled-components";

export const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  background: ${(props) =>
    props.background === "dark"
      ? `linear-gradient(0deg, #2099c0, #002e61)`
      : `#ffffff`};
  margin-bottom: -3rem;
  position: relative;
  z-index: -1;
`;

export const Container = styled.div`
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  background-color: #4c4e56;
  width: 100%;
`;

export const Content = styled.div`
  position: relative;
  z-index: 99999999;
  color: ${(props) => (props.background === "dark" ? `#ffffff` : `#C7AF87`)};
`;

export const Graphics = styled.div`
  width: 50%;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-image: ${(props) =>
    props.background === "dark"
      ? `url('/images/hero-dots-blue.svg')`
      : `url('/images/hero-circles-${props.company}.svg')`};
  background-size: cover;
  background-repeat: no-repeat;
  img {
    align-self: flex-end;
    display: inline-block;
    max-width: 600px;
    position: absolute;
    bottom: -2rem;
  }
`;
