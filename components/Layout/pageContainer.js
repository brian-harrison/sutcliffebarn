import styled from "@emotion/styled";
import { device, layout, screenSizes } from "../../lib/variables";

export const PageContainer = styled.div`
  position: relative;
  max-width: ${screenSizes.desktop};
  height: auto;
  margin: 0 auto;
  padding: 0 2rem 0 2rem;
  box-sizing: border-box;
  /* border: 1px solid red; */

  @media ${device.tablet} {
    padding: 0 1rem 0 1rem;
  }
`;
