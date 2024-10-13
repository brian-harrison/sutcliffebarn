import styled from "@emotion/styled";
import { device, screenSizes } from "../../../lib/variables";

export const Containter = styled.div`
  max-width: ${screenSizes.laptop};
  margin: 0 auto;
  height: auto;
  line-height: 150%;
  font-size: 16px;


  @media ${device.tablet} {
    padding: 0 1rem 0 1rem;
  }
  @media ${device.phone} {
    padding: 0 1rem 0 1rem;
  }
`;

export const H1 = styled.h1`
  font-weight: 400;
`
