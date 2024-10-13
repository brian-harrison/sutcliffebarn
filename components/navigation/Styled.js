import styled from "@emotion/styled";
import { layout, device, screenSizes } from "../../lib/variables";

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  max-width: ${screenSizes.desktop};
  margin: 0 auto;
  height: auto;
  padding: 1rem 0 0 2rem;

  @media ${device.tablet} {
    padding: 1rem 0 0 1rem;
  }
`;

export const LogoContainer = styled.div`
  width: 30%;
  height: 50px;
  padding: 0 0 0 0;
  font-family: var(--anton-condensed-font);
  font-size: 2rem;
  color: ${layout.featureColour};

  & a {
    text-decoration: none;
    color: ${layout.featureColour};
  }
  @media ${device.tablet} {
    padding: 0 0 0 0;
    /* width: 50%; */
  }
  @media ${device.phone} {
    width: 65%;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  width: 70%;
  height: 50px;
  text-align: right;
  /* border:1px solid black; */

  @media ${device.tablet} {
    /* width: 50%; */
  }
  @media ${device.phone} {
    width: 35%;
  }
`;
