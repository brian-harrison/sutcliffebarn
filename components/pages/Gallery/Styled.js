import styled from "@emotion/styled";
import { device, navigation } from "../../../lib/variables";

export const H1 = styled.h1`
  font-weight: 300;
  font-size: 1.4rem;
  padding: 0;
  margin-top: 0.5rem;

  @media ${device.phone} {
    padding-top: 1rem;
  }
`;

export const P = styled.p`
  margin: 1rem 0 2rem 0;
`;

