import styled from "@emotion/styled";
import { device } from "../../lib/variables";

export const ModalBackground = styled.div`
  display: ${({ imageIndex }) => (imageIndex > -1 ? "block" : "flex")};
  justify-content: center;
  align-items: flex-start;
  position: fixed; /* Stay in place */
  box-sizing: border-box;
  padding-top: 5rem;
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: black;
  color: white;
  z-index: 9999; /* Sit on top */
`;

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
`;

export const Table = styled.div`
  display: table;
  height: 100%;
  width: 100%;
`
export const Row = styled.div`
  display: table-row;
`
export const Cell = styled.div`
  display: table-cell;
  // border: 1px solid white;
  width: ${({ width }) => ( width ? width: "100%")};
  cursor: ${({cursor} )=> cursor ? 'pointer' : 'default'};
  text-align: ${({alignText}) => ( alignText ? alignText : "center" )};
  padding-right: ${({alignText}) => ( alignText ? "1rem" : "0" )};
  vertical-align: middle;
`
export const ArrowCell = styled.div`
  display: table-cell;
  // border: 1px solid white;
  width: ${({ width }) => ( width ? width: "100%")};
  cursor: pointer;
  text-align: center;
  vertical-align: middle;
  font-size: 3rem;

  &:hover {
    background-color: #1a1a1a;
    // 85% = 262626
    // 80% = 333333
  }

  @media ${device.tablet} {
    font-size: 2rem;
  }
  @media ${device.phone} {
    
  }
`
export const CloseCell = styled.div`
  display: table-cell;
  width: ${({ width }) => ( width ? width: "100%")};
  cursor: pointer;
  text-align: right;
  vertical-align: middle;
  padding-right: 6px;
  font-size: 2rem;
  // border: 1px solid white;
  &:hover {
    color: lightgray;
  }

  @media ${device.tablet} {
    font-size: 1.5rem;
  }
  @media ${device.phone} {
    
  }
`
export const CaptionBox = styled.div`
  width: 100%;
  height: auto;
  padding-top: 10px;
  box-sizing: border-box;
  text-align: center;
  color: white;
  font-weight: 100;
`;

// export const Close = styled.div`
//   position: absolute;
//   top: -4rem;
//   right: 0;
//   border: none;
//   width: 100px;
//   height: 30px;
//   font-size: 1.5rem;
//   display: flex;
//   justify-content: right;
//   // padding-top: 5px;
//   user-select: none;
//   cursor: pointer;
// `;
