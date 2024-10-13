import styled from "@emotion/styled";

export const Container = styled.div`
  max-width: 600px;
  margin: 2rem auto 0 auto;
  
`;

export const H1 = styled.h1`
  font-weight: 300;
`

export const H3 = styled.h3`
  font-weight: 300;
`

export const P = styled.p`
  // font-weight: 100;
`

export const I = styled.i`
  // font-weight: 100;
  font-style: italic;
`

export const Review = styled.div`
  max-width: 600px;
  margin: 0 auto 2rem auto;
  background-color: ${({ page }) => (page === "/" ? "white" : "#F5F5F5")};
  border-bottom: ${({ page }) => (page === "/" ? "1px dotted gray" : "none")};
  padding: ${({ page }) => (page === "/reviews" ? "2rem" : "0 0 1rem 0")};
`;
