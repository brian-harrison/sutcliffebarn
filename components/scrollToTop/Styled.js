import styled from "@emotion/styled";

const hoverChange = "color 0.5s ease";
const fadeIn = "opacity 1.0s ease-in";
export const BackToTopContainer = styled.div`
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  position: fixed;
  right: 4rem;
  bottom: 10rem;
  font-size: 2rem;
  color: lightgray;
  z-index: 1000;
  cursor: pointer;

  -webkit-transition: ${hoverChange};
  -moz-transition: ${hoverChange};
  -ms-transition: ${hoverChange};
  -o-transition: ${hoverChange};
  transition: ${hoverChange};

  &:hover {
    color: gray;
  }
`;
