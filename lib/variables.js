export const screenSizes = {
  large: "2000px",
  desktop: "1200px",
  largeLaptop: "1100px",
  laptop: "992px",
  tablet: "768px",
  phone: "576px",
  portraitPhone: "400px",
};

const breakpoints = {
  portraitPhone: "576px",
  tablets: "768px",
  laptops: "992px",
  largeScreens: "1200px",
};

export const device = {
  large: `(max-width: ${screenSizes.large})`,
  desktop: `(max-width: ${screenSizes.desktop})`,
  largeLaptop: `(max-width: ${screenSizes.largeLaptop})`,
  laptop: `(max-width: ${screenSizes.laptop})`,
  tablet: `(max-width: ${screenSizes.tablet})`,
  phone: `(max-width: ${screenSizes.phone})`,
  portraitPhone: `(max-width: ${screenSizes.portraitPhone})`,
};

export const layout = {
  width: "1000px",
  featureColour: " #8ebca9",
};

export const navigation = {
  link: "#000",
  linkHover: 'gray',
  linkCurrent: `${layout.featureColour}`,
  backgroundColor: `${layout.featureColour}`,
};

export const burger = {
  top: "1.5rem",
  right: "2rem",
  size: "2rem",
  barHeight: "5px",
  barColour: "#666",
  barActiveColour: "white",
  transition: "all .3s ease",
  apart: "8px",
};
