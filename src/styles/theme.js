const brand = {
  black: "#1A1F22",
  primary: "#1C2B39",
  teal: "#2C5875",
  white: "#FFFFFF",
  green: "#339989",
  green2: "#48574A",
  green3: "#4D5744",
  green4: "#95A387",
  green5: "#D5E4CB",
  green6: "#717D68",
  green7: "#4C5654",
  green8: "#5f8b83",
  green9: "#98A886",
  green10: "#7F9172",
  green11: "#70ae6e",
  green12: "#6e9075",
};
const fonts = {
  sans: "poppins, sans-serif",
  serif: '"Lora", serif',
};
const size = {
  small: "639px",
  medium: "1024px",
  large: "1025px",
};
const device = {
  desktop: `screen and (min-width: ${size.large})`,
  mobile: `(max-width: ${size.small})`,
  tablet: `(min-width: ${size.small}) and (max-width:${size.medium})`,
  tabletUp: `(min-width: ${size.small})`,
};
const elements = {
  text: {
    fontFamily: fonts.serif,
    margin: "0",
    color: brand.black,
  },
};

const theme = {
  brand,
  colors: {
    border: "#F9F9FA",
  },
  container: {
    width: "100%",
    maxWidth: "106.5rem",
    padding: "0 2rem",
    margin: "0 auto",
  },
  content: {
    maxWidth: "50%",
    marginLeft: "8.3333%",
  },
  device,
  fonts,
  elements,
  layers: {
    root: -1,
    base: 1,
    content: 10,
    overlay: 100,
    priority: 1000,
  },
  mobileContent: {
    width: "100%",
    maxWidth: "none",
    paddingLeft: "1rem",
    paddingRight: "1rem",
    marginLeft: "0",
  },
  tabletContent: {
    maxWidth: "66.66667%",
    marginLeft: "0",
    paddingLeft: "1rem",
    paddingRight: "1rem",
  },
};

export default theme;
