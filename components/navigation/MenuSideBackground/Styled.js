import styled from "@emotion/styled";

export const Background = styled.div`
  display: ${(props) => (props.menuOpen === true ? "block" : "none")};
  position: fixed; /* Stay in place */
  left: 0;
  top: 0;
  margin: 0;
  padding: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.6); /* Black w/ opacity */
  cursor: pointer;
  z-index: 1000;
`;
