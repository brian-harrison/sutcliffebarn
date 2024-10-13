import styled from "@emotion/styled";
import { device } from "../../../lib/variables";

export const Container = styled.div`
  position: relative;
  max-width: 600px;
  margin: 2rem auto 2rem auto;
  padding: 0;
`;

export const DetailsContainer = styled.div`
  max-width: 600px;
  margin: 0 auto 2rem auto;
  padding: 0 1rem 2rem 1rem;
  background-color: white;
  border-radius: 5px;
  /* @media ${device.phone} {
    // font-size: 1rem;
  } */
`;

export const Ul = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const H3 = styled.h3`
  font-weight: 400;
`

export const Li = styled.li`
  // font-weight: 100;
`

export const P = styled.p`
  // font-weight: 100;
`