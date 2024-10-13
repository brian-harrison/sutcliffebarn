import styled from "@emotion/styled";
import { device } from "../../lib/variables";

export const GridDiv = styled.div`
  --gap: 6px;
  --num-col: ${({columns}) => columns};

  display: grid;
  box-sizing: border-box;
  padding: var(--gap);
  grid-template-columns: repeat(var(--num-col), 1fr);
  grid-auto-rows: auto;
  gap: var(--gap);
  cursor: pointer;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Div = styled.div`
  position: relative;
`;
